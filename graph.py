import pandas as pd
import networkx as nx
import matplotlib.pyplot as plt
from ast import literal_eval


def get_exp_df(csv_file_path):
    """
    reads csv file containing all emails and returns parsed dataframe with unique recipients
    :param csv_file_path: path to csv file containing all emails
    :return: parsed email dataframe with unique recipients
    """

    emails_df = pd.read_csv(csv_file_path, index_col=0, parse_dates=['date'])
    emails_df['date'] = pd.to_datetime(emails_df['date'], utc=True)
    emails_df = emails_df.fillna(str(['-']))
    emails_df['to'] = emails_df['to'].apply(literal_eval)
    emails_df = emails_df.explode('to')
    return emails_df


def get_nodes(emails_df):
    from_list = emails_df['from'].values.tolist()
    to_list = emails_df['to'].values.tolist()
    node_list = from_list + to_list
    return list(set(node_list))


def get_edges(emails_df):
    from_list = emails_df['from'].values.tolist()
    to_list = emails_df['to'].values.tolist()
    edge_list = zip(from_list, to_list)
    return list(edge_list)


def create_graph(node_list, edge_list):
    G = nx.MultiGraph()
    G.add_nodes_from(node_list)
    G.add_edges_from(edge_list)
    nx.write_gexf(G, './enron.gexf')
    plt.show()


if __name__ == "__main__":
    # load email data set
    emails_df = get_exp_df('./emails.csv')
    # print(len(emails_df))
    node_list = get_nodes(emails_df)
    # print(node_list)
    edge_list = get_edges(emails_df)
    #print(edge_list)
    create_graph(node_list, edge_list)
