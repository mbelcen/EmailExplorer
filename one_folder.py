import os
import regex as re

"""
This script is part of data prep for enron emails. It creates one folder where there will be all emails
"""


def create_one_folder(src_dir, dst_dir):
    """
    Creates one folder for all emails (remove while user_num to export all)
    :param src_dir: where the original data is stored
    :param dst_dir: where you want the data to be stored
    :return: one folder with all emails, every email is indexed name_in/out_number
    """
    user_num = 1
    for user in os.listdir(src_dir):
        email_in_num = 1
        email_out_num = 1
        if user_num < 11:
            try:
                username = re.sub("-", "_", user)
                # extract inbox emails
                for inbox_email in os.listdir(src_dir + "/" + user + "/inbox"):
                    try:
                        os.system("cp " + src_dir + "/" + user + "/inbox/" + inbox_email + " " + dst_dir + "/" +
                                  username + "_in_" + str(email_in_num))
                        print("SUCCESS ---------IN---------->" + user + "------" + str(email_in_num))
                        email_in_num += 1
                    except Exception as e1:
                        print(e1)

                # extract sent emails
                for sent_email in os.listdir(src_dir + "/" + user + "/sent"):
                    try:
                        os.system("cp " + src_dir + "/" + user + "/sent/" + sent_email + " " + dst_dir + "/" + username +
                                  "_out_" + str(email_out_num))
                        email_out_num += 1
                        print("SUCCESS ---------OUT---------->" + user + "------" + str(email_out_num))
                    except Exception as e2:
                        print(e2)

            except Exception as e:
                print(e)
                continue
            user_num += 1
        else:
            break


if __name__ == "__main__":
    create_one_folder("/Users/mohamedbelahcen/Desktop/maildir", "/Users/mohamedbelahcen/Desktop/test_mails")

