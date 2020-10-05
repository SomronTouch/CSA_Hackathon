# filtering for active fire data (populating historic view)
# Data: Harshdeep Verma gathered & transformed the data from Copernicus
# created by abby sun
# date: 2020-10-04
# last edited: abby sun, 2020-10-04

from pathlib import Path
import pandas as pd
import os
from DataClean import DataClean

file_dir = Path("C:\\Users\Abby\Documents\GitHub\CSA_Hackathon\Analysis\Data\TrainDataset\FireData")
output_dir = Path("C:\\Users\Abby\Documents\GitHub\CSA_Hackathon\Analysis\ProcessData\CleanDataset\ActiveFire")
file_name = "fire_filtered.csv"

df = pd.read_csv(os.path.join(file_dir, os.path.basename(file_name)))
print("Total records read: " + str(len(df.index)))

df = DataClean.active_records(df, df.iloc[:, 2:].columns)
print("None empty records: " + str(len(df.index)))
print("Exporting data to .csv")
df.to_csv(os.path.join(output_dir, os.path.basename("ActiveFireCanada2019.csv")), index=False)
