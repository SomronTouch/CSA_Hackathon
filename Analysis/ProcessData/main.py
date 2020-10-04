# for executing program (merge multiple data sources together)
# created by abby sun
# date: 2020-10-03
# last edited: abby sun, 2020-10-03

from pathlib import Path
import pandas as pd
import os
from DataClean import DataClean


def get_date(sdate, edate):
    dr = pd.date_range(start=sdate, end=edate)
    return dr


def read_filter_file(file_name, file_dir, la_range, lo_range):
    try:
        print("Reading file: " + file_name)
        df = pd.read_csv(os.path.join(file_dir, os.path.basename(file_name)))
        df = DataClean.filter_coordinate(df, la_range, lo_range)
    except:
        print("Error reading file")
    else:
        print("File read successfully")
        return df


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    file_dir = Path("C:\\Users\Abby\Documents\GitHub\CSA_Hackathon\Analysis\Data\TrainDataset\MOPITT")
    output_dir = Path("C:\\Users\Abby\Documents\GitHub\CSA_Hackathon\Analysis\ProcessData\CleanDataset\MOPITT")
    fname_pre = "MOP02J-"
    fname_suf = "-L2V18.0.3.csv"

    daterange = [["2019-01-01", "2019-01-31"],
                 ["2019-02-01", "2019-02-28"],
                 ["2019-03-01", "2019-03-31"],
                 ["2019-04-01", "2019-04-30"],
                 ["2019-05-01", "2019-05-31"],
                 ["2019-06-01", "2019-06-30"],
                 ["2019-07-01", "2019-07-31"],
                 ["2019-08-01", "2019-08-31"],
                 ["2019-09-01", "2019-09-30"],
                 ["2019-10-01", "2019-10-31"],
                 ["2019-11-01", "2019-11-30"],
                 ["2019-12-01", "2019-12-31"]]
    la_range = [42.0, 84.0]
    lo_range = [-142.0, -52.0]

    for r in daterange:
        df_month = pd.DataFrame()
        month = ""

        date = get_date(r[0], r[1])
        for d in date:
            month = d.strftime("%b")
            data = read_filter_file(fname_pre + d.strftime("%Y%m%d") + fname_suf, file_dir, la_range, lo_range)
            df_month = df_month.append(data)
            print(str(len(df_month.index)) + " of records read for " + d.strftime("%b, %Y") + "\n")

        # process monthly data
        print("End of month. Replace duplicated coordinates with group avg. Records left: " + str(len(df_month.index)))
        df_month = DataClean.rem_duplicate_area(df_month)
        print("Clean data and export to .csv \n")
        df_month.to_csv(os.path.join(output_dir, os.path.basename("MOPITT2019_" + month + ".csv")), index=False)

        # clear monthly data from dataframe
        df_month.iloc[0:0]

    # data = read_file(fname_pre + d.strftime("%Y%m%d") + fname_suf, file_dir)
    # print(data)

    # la_range = [42.0, 84.0]
    # lo_range = [-142.0, -52.0]

    # dataClean = DataClean()
    # df = pd.read_csv(os.path.join(file_dir, os.path.basename(file_name)))
    # df = dataClean.filter_coordinate(df, la_range, lo_range)
    # df = dataClean.rem_duplicate_area(df)

    # pd.set_option("display.max_rows", None, "display.max_columns", None)
    # print(df)
