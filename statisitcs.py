import pandas as pd

"""
This script contains multiple functions that provides various information contained in an email data set about the 
individuals and the messages sent
"""


def get_df(csv_file_path):
    """
    reads csv file containing all emails and returns parsed dataframe
    :param csv_file_path: path to csv file containing all emails
    :return: parsed email dataframe
    """
    emails_df = pd.read_csv(csv_file_path, index_col=0, parse_dates=['date'])
    return emails_df


def get_overall_top_senders(emails_df):
    """
    get top 10 individuals who send emails the most
    :param emails_df: data frame with all emails from archive
    :return: list of top 10 individuals (email address) who send emails the most
    """


if __name__ == "__main__":
    #load email data set
    emails_df = get_df('./emails.csv')
