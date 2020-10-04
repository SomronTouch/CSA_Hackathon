# Merge all datasets together
# created by abby sun
# date: 2020-10-04
# last edited: abby sun, 2020-10-04

from pathlib import Path
import pandas as pd
import os
from DataClean import DataClean

# merged data
output_dir = Path("C:\\Users\Abby\Documents\GitHub\CSA_Hackathon\Analysis\ProcessData\CleanDataset\Merge")
output_fname = "_merged.csv"

# MOPITT Data
mfile_dir = Path("C:\\Users\Abby\Documents\GitHub\CSA_Hackathon\Analysis\ProcessData\CleanDataset\MOPITT")
mop_file = "MOPITT2019_Jan.csv"

print("reading file: " + mop_file)
m_df = pd.read_csv(os.path.join(mfile_dir, os.path.basename(mop_file)))

# Other Data
ofile_dir = Path("C:\\Users\Abby\Documents\GitHub\CSA_Hackathon\Analysis\ProcessData\CleanDataset\Other")
other_file = "Jan_filtered.csv"

print("reading file: " + other_file)
o_df = pd.read_csv(os.path.join(ofile_dir, os.path.basename(other_file)))

# fire Data
ffile_dir = Path("C:\\Users\Abby\Documents\GitHub\CSA_Hackathon\Analysis\ProcessData\CleanDataset\ActiveFire")
fire_file = "ActiveFireCanada2019.csv"

print("reading file: " + fire_file)
f_df = pd.read_csv(os.path.join(ffile_dir, os.path.basename(fire_file)))
f_df1 = f_df[["Latitude", "Longitude", "Jan"]].rename(columns={"Jan": "Fire_Level"})


# merge dataset
print("merging all datasets")
merge_df = pd.merge(m_df, o_df, on=["Latitude", "Longitude"], how='outer')
merge_df = pd.merge(merge_df, f_df1, on=["Latitude", "Longitude"], how='outer').fillna(0.0)

print("Exporting data to csv files")
merge_df.to_csv(os.path.join(output_dir, os.path.basename("Jan" + output_fname)), index=False)
print("Export complete")
