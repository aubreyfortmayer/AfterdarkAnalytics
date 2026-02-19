import pandas as pd
from sklearn.preprocessing import LabelEncoder
readindf = pd.read_csv("survey.csv");
names_of_og_cols = readindf.columns
print(names_of_og_cols);
readindf.drop(["Timestamp", "Name", "Current Year at UF", "Gender", "Age Range"], axis=1, inplace=True);
name_of_cols_no_dem = readindf.columns;
print(name_of_cols_no_dem);

#seperating target column and turning it into numerical value.
readindf["Target"] = readindf["Are you going out tonight?"].map({"Yes": 1, "No": 0})
readindf.drop(["Are you going out tonight?"], axis = 1, inplace=True);
print(readindf);

target_col = readindf["Target"];
print(target_col);


