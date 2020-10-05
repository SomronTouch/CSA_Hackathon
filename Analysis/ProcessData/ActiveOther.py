# filtering for none empty data in Other data folder as well as update column names to match naming convention
# Data: Harshdeep Verma gathered & transformed these files from NASA
# created by abby sun
# date: 2020-10-04
# last edited: abby sun, 2020-10-04

from pathlib import Path
import pandas as pd
import os
from DataClean import DataClean

file_dir = Path("C:\\Users\Abby\Documents\GitHub\CSA_Hackathon\Analysis\Data\TrainDataset\Other")
output_dir = Path("C:\\Users\Abby\Documents\GitHub\CSA_Hackathon\Analysis\ProcessData\CleanDataset\Other")
file_name = ["Jan_filtered.csv",
             "Feb_filtered.csv",
             "Mar_filtered.csv",
             "Apr_filtered.csv",
             "May_filtered.csv",
             "Jun_filtered.csv",
             "Jul_filtered.csv",
             "Aug_filtered.csv",
             "Sep_filtered.csv",
             "Oct_filtered.csv",
             "Nov_filtered.csv",
             "Dec_filtered.csv"]

for fn in file_name:
    print("reading file: " + fn)
    df = pd.read_csv(os.path.join(file_dir, os.path.basename(fn)))
    print("Total records read: " + str(len(df.index)))

    df = DataClean.clean_column_name(df)
    df = DataClean.active_records(df, df.iloc[:, 2:].columns)
    print("None empty records: " + str(len(df.index)))

    print("Exporting data to .csv")
    df.to_csv(os.path.join(output_dir, os.path.basename(fn)), index=False)
