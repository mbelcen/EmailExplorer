import pandas as pd
import json


"""
This script creates a timeline of a conversation between two individuals in the email data. It starts with a dataframe
that contains all emails
"""


def get_df(csv_file_path):
    """
    reads csv file containing all emails and returns parsed dataframe
    :param csv_file_path: path to csv file containing all emails
    :return: parsed email dataframe
    """
    emails_df = pd.read_csv(csv_file_path, index_col=0, parse_dates=['date'])
    emails_df['date'] = pd.to_datetime(emails_df['date'], utc=True)
    return emails_df


def get_conv_df(emails_df, person_1, person_2):
    """
    :param emails_df: data frame containing all emails
    :param person_1: email of person 1
    :param person_2: email of person 2
    :return: dataframe containing only emails exchanged between person_1 and person_2 and time sorted
    """
    email_conv_df = emails_df.loc[(((emails_df['from'] == person_1) & (emails_df['to'].str.contains(person_2))) |
                                   ((emails_df['from'] == person_2) & (emails_df['to'].str.contains(person_1))))]
    return email_conv_df.sort_values(['date'])


def get_conv_json_js(conv_df):
    """
    takes conversation dataframe and formats the data into appropriate json format for js script
    :param conv_df: dataframe containing emails exchanegd between two individuals
    :return: appropriate json format for js script
    """
    events = list()
    conv_df['year'], conv_df['month'], conv_df['day'], conv_df['hour'], conv_df['minute'] = \
    conv_df['date'].dt.year, conv_df['date'].dt.month, conv_df['date'].dt.day, conv_df['date'].dt.hour, \
    conv_df['date'].dt.minute
    for i in range(len(conv_df)):
        event = {
            "start_date": {
                "month": str(conv_df["month"].iloc[i]),
                "day": str(conv_df["day"].iloc[i]),
                "year": str(conv_df["year"].iloc[i]),
                "hour": str(conv_df["hour"].iloc[i]),
                "minute": str(conv_df["minute"].iloc[i])
                 },
            "text": {
                "text": conv_df["text"].iloc[i]
            },
            "group": conv_df["from"].iloc[i]
        }
        events.append(event)
    conv_dict = {"events": events}
    return json.dumps(conv_dict, indent=4)


def create_timeline_js(conv_dict):
    """
    Creates timeline in the js script
    :param conv_dict: appropriate json format for js script as defined above
    :return: a script.js to create timeline
    """
    script = "// http://timeline.knightlab.com/docs/options.html \n\
                var additionalOptions = { \n\
                    start_at_end: true, \n    default_bg_color: {r:0, g:0, b:0}, \n    timenav_height: 250 \n};\n\
                //usage: \n" + "var sample_json = {};".format(conv_dict) + "// two arguments: the id of the Timeline " \
                                                                           "container (no '#')\n\
                // and the JSON object or an instance of TL.TimelineConfig created from\n\
                // a suitable JSON object\n\
                window.timeline = new TL.Timeline('timeline-embed'\n\
                //, timeline_json\n\
                , sample_json\n);"
    script_js = open("./js/script.js", "w")

    return script_js.write(script), script_js.close()


if __name__ == '__main__':
    df = get_df("./emails.csv")
    conv_df = get_conv_df(df, 'john.arnold@enron.com', 'john.lavorato@enron.com')
    conv_dict = get_conv_json_js(conv_df)
    create_timeline_js(conv_dict)