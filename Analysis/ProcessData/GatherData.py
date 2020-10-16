# for downloading MOPITT csv files
# created by abby sun
# date: 2020-10-03
# last edited: abby sun, 2020-10-03

from pathlib import Path
import ftplib
import os


# open ftp link & download files specified (in this case all .csv)
def download_data():
    ftp = ftplib.FTP(server_ip)
    ftp.login()
    ftp.cwd(server_directory)

    for filename in ftp.nlst(file_match):
        target_file_name = os.path.join(target_dir, os.path.basename(filename))
        with open(target_file_name, 'wb') as fhandle:
            ftp.retrbinary('RETR %s' % filename, fhandle.write)

    ftp.quit()


# set server info & paths
server_ip = "data.asc-csa.gc.ca"
server_directory = "/users/OpenData_DonneesOuvertes/pub/MOPITT/2019/"
target_dir = Path("C:\\Users\Abby\Documents\GitHub\CSA_Hackathon\Analysis\Data\TrainDataset\MOPITT")
file_match = '*.csv'

# download files
download_data()
