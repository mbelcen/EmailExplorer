import pandas as pd

"""
This script creates a dataframe with emails from json file with all emails. It helps manipulate easily data
"""


def get_email_csv(json_file_path, csv_file_path):
    """
    :param json_file_path: takes a json file with all emails
    :return: a pandas data frame with all easy to manipulate
    """
    emails_df = pd.read_json(json_file_path, orient='index')
    emails_df.date = pd.to_datetime(emails_df.date)
    emails_df.to_csv(csv_file_path)


if __name__ == '__main__':
    get_email_csv("./final_json", "./emails.csv")