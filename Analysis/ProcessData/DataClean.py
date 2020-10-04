# for cleaning data
# created by abby sun
# date: 2020-10-03
# last edited: abby sun, 2020-10-04

import numpy as np
import pandas as pd


class DataClean:

    @staticmethod
    def clean_column_name(dataframe):
        dataframe.columns = dataframe.columns.str.strip().str.replace('# ', '').str.replace(' ', '_')
        return dataframe

    @staticmethod
    def filter_coordinate(dataframe, la_range, lo_range):
        DataClean.clean_column_name(dataframe)

        in_range = (dataframe["Latitude"].between(la_range[0], la_range[1])) & \
                   (dataframe["Longitude"].between(lo_range[0], lo_range[1]))
        dataframe = dataframe[in_range]
        return dataframe

    @staticmethod
    def rem_duplicate_area(dataframe):
        # truncating to 2 decimals
        dataframe.Latitude = np.trunc(10 * dataframe.Latitude) / 10
        dataframe.Longitude = np.trunc(10 * dataframe.Longitude) / 10

        dataframe = dataframe.groupby(["Latitude", "Longitude"]).mean().reset_index()
        return dataframe

    @staticmethod
    def active_records(dataframe, columns):
        df_mask = False
        for c in columns:
            print("Processing Column: " + c)
            df_mask |= dataframe[c] != 0.0

        dataframe = dataframe[df_mask]
        return dataframe
