import os
from email import message_from_file
import json
import regex as re

'''
This script contains multiple functions that help create a final json with all emails 
'''

def file_exists(f, path):
    """Checks whether extracted file was extracted before."""
    return os.path.exists(os.path.join(path, f))


def construct_name(id, fn):
    """Constructs a file name out of messages ID and packed file name"""
    id = id.split(".")
    id = id[0]+id[1]
    return id+"."+fn


def disqo(s):
    """Removes double or single quotations."""
    s = s.strip()
    if s.startswith("'") and s.endswith("'"): return s[1:-1]
    if s.startswith('"') and s.endswith('"'): return s[1:-1]
    return s


def disgra(s):
    """Removes < and > from HTML-like tag or e-mail address or e-mail ID."""
    s = s.strip()
    if s.startswith("<") and s.endswith(">"): return s[1:-1]
    return s


def pullout(m, key):
    """Extracts content from an e-mail message.
    This works for multipart and nested multipart messages too.
    m   -- email.Message() or mailbox.Message()
    key -- Initial message ID (some string)
    Returns tuple(Text, Html, Files, Parts)
    Text  -- All text from all parts.
    Html  -- All HTMLs from all parts
    Files -- Dictionary mapping extracted file to message ID it belongs to.
    Parts -- Number of parts in original message.
    """
    Html = ""
    Text = ""
    Files = {}
    Parts = 0
    if not m.is_multipart():
        if m.get_filename(): # It's an attachment
            fn = m.get_filename()
            cfn = construct_name(key, fn)
            Files[fn] = (cfn, None)
            if file_exists(cfn): return Text, Html, Files, 1
            return Text, Html, Files, 1
        # See where this belongs. Text, Html or some other data:
        cp = m.get_content_type()
        if cp == "text/plain":
            Text += str(m.get_payload(decode=False))
        elif cp == "text/html":
            Html += str(m.get_payload(decode=False))
        else:
            # Something else!
            # Extract a message ID and a file name if there is one:
            # This is some packed file and name is contained in content-type header
            # instead of content-disposition header explicitly
            cp = m.get("content-type")
            try:
                id = disgra(m.get("content-id"))
            except Exception as e:
                id = None
            # Find file name:
            o = cp.find("name=")
            if o == -1:
                return Text, Html, Files, 1
            ox = cp.find(";", o)
            if ox == -1:
                ox = None
            o += 5
            fn = cp[o:ox]
            fn = disqo(fn)
            cfn = construct_name(key, fn)
            Files[fn] = (cfn, id)
            if file_exists(cfn): return Text, Html, Files, 1
        return Text, Html, Files, 1
    # This IS a multipart message.
    # So, we iterate over it and call pullout() recursively for each part.
    y = 0
    while 1:
        # If we cannot get the payload, it means we hit the end:
        try:
            pl = m.get_payload(y)
        except Exception as e:
            break
        # pl is a new Message object which goes back to pullout
        t, h, f, p = pullout(pl, key)
        Text += t
        Html += h
        Files.update(f); Parts += p
        y += 1
    return Text, Html, Files, Parts


def extract(msgfile, key):
    """Extracts all data from e-mail, including From, To, etc., and returns it as a dictionary.
    msgfile -- A file-like readable object
    key     -- Some ID string for that particular Message. Can be a file name or anything.
    Returns dict()
    Keys: from, to, subject, date, text, html, parts[, files]
    Key files will be present only when message contained binary files.
    For more see __doc__ for pullout() and caption() functions.
    """
    m = message_from_file(msgfile)
    From, To, Subject, Date = caption(m)
    Text, Html, Files, Parts = pullout(m, key)
    Text = Text.strip()
    Html = Html.strip()
    msg = {"subject": Subject, "from": From, "to": To, "date": Date, "text": Text, "html": Html, "parts": Parts}
    if Files:
        msg["files"] = Files
    return msg


def caption(origin):
    """Extracts: To, From, Subject and Date from email.Message() or mailbox.Message()
    origin -- Message() object
    Returns tuple(From, To, Subject, Date)
    If message doesn't contain one/more of them, the empty strings will be returned.
    """
    Date = ""
    if "Date" in origin:
        Date = origin["date"].strip()
    From = ""
    if "From" in origin:
        From = origin["from"].strip()
    To = ""
    if "To" in origin:
        To = origin["to"].strip()
        To = re.sub("\n\t", "", To)
        To = To.split(',')
    Subject = ""
    if "Subject" in origin:
        Subject = origin["subject"].strip()
    return From, To, Subject, Date


def create_json(emails_dir):
    """
    :param emails_dir: where emails are stored
    :return: a json file "final_json" of all exchanged emails (dictionaries with keys: Message_id (unique), From, To, Subject, Date,
     Text/HTML
    """
    emails_list = os.listdir(emails_dir)
    num_emails = len(emails_list)
    num_digits = len(str(num_emails))
    message_id_num = 1
    all_emails_dict = dict()
    for email in emails_list:
        try:
            email_file = open(emails_dir+'/'+email, "r")
            initial_dict = extract(email_file, email_file.name)
            email_id = 'email_id_' + str(message_id_num).zfill(num_digits)
            all_emails_dict[email_id] = initial_dict
            email_file.close()
            message_id_num += 1
        except Exception as e:
            print(e)
    return json.dump(all_emails_dict, indent=4, sort_keys=True, fp=open("final_json", "w"))


if __name__ == "__main__":

    create_json("/Users/mohamedbelahcen/Desktop/test_mails")

