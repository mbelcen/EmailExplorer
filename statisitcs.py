import pandas as pd
from ast import literal_eval
import matplotlib.pyplot as plt

pd.set_option('display.max_rows', 500)
pd.set_option('display.max_columns', 500)
pd.set_option('display.width', 1000)

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
    emails_df['date'] = pd.to_datetime(emails_df['date'], utc=True)
    return emails_df


def get_overall_top_senders(emails_df):
    """
    get top individuals who send emails the most
    :param emails_df: data frame with all emails from archive
    :return: data frame of top individuals (email address) who send emails the most
    """
    top_overall_senders = emails_df.groupby('from').size().reset_index(name='# of sent emails')
    return top_overall_senders.sort_values('# of sent emails', ascending=False).reset_index(drop=True)


def get_overall_top_receivers(emails_df):
    """
    get top individuals who receive emails the most
    :param emails_df: data frame with all emails from archive
    :return: data frame of top individuals (email address) who received emails the most
    """
    top_overall_receivers = emails_df.fillna(str(['-']))
    top_overall_receivers['to'] = top_overall_receivers['to'].apply(literal_eval)
    top_overall_receivers = top_overall_receivers.explode('to')
    top_overall_receivers = top_overall_receivers.groupby('to').size().reset_index(name='# of received emails')
    return top_overall_receivers.sort_values('# of received emails', ascending=False).reset_index(drop=True)


def get_person_top_senders(emails_df, person):
    """ get top individuals who send emails the most to 'person'
    :param emails_df: data frame with all emails from archive
    :param person: email of the individual
    :return: data frame of top individuals (email address) who send emails the most to 'person'
    """
    top_person_senders = emails_df.loc[(emails_df['to'].str.contains(person, na=False))]
    top_person_senders = top_person_senders.groupby('from').size().reset_index(name='# of sent emails to ' + person)
    return top_person_senders.sort_values('# of sent emails to ' + person, ascending=False).reset_index(drop=True)


def get_person_top_receivers(emails_df, person):
    """ get top individuals who to whom 'person' send emails the most
    :param emails_df: data frame with all emails from archive
    :param person: email of the individual
    :return: data frame of top individuals (email address) who receive emails the most to 'person'
    """
    top_person_receivers = emails_df.loc[(emails_df['from'] == person)]
    top_person_receivers = top_person_receivers.fillna(str(['-']))
    top_person_receivers['to'] = top_person_receivers['to'].apply(literal_eval)
    top_person_receivers = top_person_receivers.explode('to')
    top_person_receivers = top_person_receivers.groupby('to').size().reset_index(name='# of received emails from ' +
                                                                                      person)
    return top_person_receivers.sort_values('# of received emails from ' + person, ascending=False). \
        reset_index(drop=True)


def get_conversation_freq_graph(emails_df, person_1, person_2, time_period):
    """
    get a frequency graph of exchanged emails between two individuals in a time (sent and received)
    :param emails_df: data frame with all emails from archive
    :param person_1: first individual part of the conversation
    :param person_2: second individual part of the conversation
    :param time_period: W (Weekly), BW (Biweekly 15 days), M (Monthly)
    :return: a frequency plot
    """
    if time_period == 'W':
        time_period = '7D'
    elif time_period == 'BW':
        time_period = '15D'
    elif time_period == 'M':
        time_period = '30D'
    else:
        print("Please enter W, BW or M")
        return 0
    email_conv_df = emails_df.loc[(((emails_df['from'] == person_1) & (emails_df['to'].str.contains(person_2))) |
                                   ((emails_df['from'] == person_2) & (emails_df['to'].str.contains(person_1))))]
    dates = email_conv_df['date'].sort_values()
    conv_freq = (pd.to_datetime(dates)
                 .dt.floor(time_period)
                 .value_counts()
                 .rename_axis('date')
                 .reset_index(name='count'))
    conv_freq = conv_freq.sort_values('date')
    fig, ax = plt.subplots()
    ax.plot(conv_freq['date'], conv_freq['count'])

    ax.set(xlabel='dates', ylabel='Nb of exchanged emails',
           title='Nb of exchanged emails between ' + person_1 + ' and ' + person_2)
    plt.show()

    return conv_freq


def get_tri_conversation_freq_graph(emails_df, person_1, person_2, person_3, time_period):
    """
    get a frequency graph of exchanged emails between two individuals in a time (sent and received)
    :param emails_df: data frame with all emails from archive
    :param person_1: first individual part of the conversation
    :param person_2: second individual part of the conversation
    :param person_3: third individual part of the conversation
    :param time_period: W (Weekly), BW (Biweekly 15 days), M (Monthly)
    :return: a frequency plot
    """
    if time_period == 'W':
        time_period = '7D'
    elif time_period == 'BW':
        time_period = '15D'
    elif time_period == 'M':
        time_period = '30D'
    else:
        print("Please enter W, BW or M")
        return 0
    email_conv_df_12 = emails_df.loc[(((emails_df['from'] == person_1) & (emails_df['to'].str.contains(person_2))) |
                                   ((emails_df['from'] == person_2) & (emails_df['to'].str.contains(person_1))))]
    email_conv_df_13 = emails_df.loc[(((emails_df['from'] == person_1) & (emails_df['to'].str.contains(person_3))) |
                                      ((emails_df['from'] == person_3) & (emails_df['to'].str.contains(person_1))))]
    dates_12 = email_conv_df_12['date'].sort_values()
    dates_13 = email_conv_df_13['date'].sort_values()

    conv_freq_12 = (pd.to_datetime(dates_12)
                    .dt.floor(time_period)
                    .value_counts()
                    .rename_axis('date')
                    .reset_index(name='count'))
    conv_freq_12 = conv_freq_12.sort_values('date')

    conv_freq_13 = (pd.to_datetime(dates_13)
                    .dt.floor(time_period)
                    .value_counts()
                    .rename_axis('date')
                    .reset_index(name='count'))
    conv_freq_13 = conv_freq_13.sort_values('date')
    fig, ax = plt.subplots()
    ax.plot(conv_freq_12['date'], conv_freq_12['count'], label=person_1 + '<-->' + person_2, marker='o')
    ax.legend()
    ax.plot(conv_freq_13['date'], conv_freq_13['count'], label=person_1 + '<-->' + person_3, marker='o')
    ax.legend()
    ax.set(xlabel='dates', ylabel='Nb of exchanged emails',
           title='Nb of exchanged emails between ' + person_1 + ' and ' + person_2 + '/' + person_3)
    plt.show()

    return conv_freq_12, conv_freq_13


if __name__ == "__main__":
    # load email data set
    emails_df = get_df('./emails.csv')
    # top_overall_senders = get_overall_top_senders(emails_df)
    # print(top_overall_senders)
    # top_overall_receivers = get_overall_top_receivers(emails_df)
    # print(top_overall_receivers)
    # top_person_senders = get_person_top_senders(emails_df, 'john.arnold@enron.com')
    # print(top_person_senders)
    # top_person_receivers = get_person_top_receivers(emails_df, 'john.lavorato@enron.com')
    # print(top_person_receivers)
    # email_conv = get_conversation_freq_graph(emails_df, 'john.arnold@enron.com', 'john.lavorato@enron.com', 'M')
    # print(email_conv)
    email_conv1, email_conv2 = get_tri_conversation_freq_graph(emails_df, 'john.arnold@enron.com',
                                                               'john.lavorato@enron.com', 'kay.chapman@enron.com',
                                                               'M')
    print(email_conv1)
    print(email_conv2)