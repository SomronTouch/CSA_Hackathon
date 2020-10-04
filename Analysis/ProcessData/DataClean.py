# for cleaning data
# created by abby sun
# date: 2020-10-03
# last edited: abby sun, 2020-10-03

import numpy as np


class DataClean:

    #supporting method, called from within the class
    @staticmethod
    def __clean_column_name(dataframe):
        dataframe.columns = dataframe.columns.str.strip().str.replace('# ', '').str.replace(' ', '_')
        return dataframe

    @staticmethod
    def filter_coordinate(dataframe, la_range, lo_range):
        DataClean.__clean_column_name(dataframe)

        in_range = (dataframe["Latitude"].between(la_range[0], la_range[1])) & \
                   (dataframe["Longitude"].between(lo_range[0], lo_range[1]))
        dataframe = dataframe[in_range]
        return dataframe

    @staticmethod
    def rem_duplicate_area(dataframe):
        # truncating to 2 decimals
        dataframe.Latitude = np.trunc(100 * dataframe.Latitude) / 100
        dataframe.Longitude = np.trunc(100 * dataframe.Longitude) / 100

        dataframe = dataframe.groupby(["Latitude", "Longitude"]).mean().reset_index()

        return dataframe
