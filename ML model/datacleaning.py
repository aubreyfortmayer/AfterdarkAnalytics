import pandas as pd
from sklearn.preprocessing import OneHotEncoder
from sklearn.preprocessing import OrdinalEncoder
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
from imblearn.over_sampling import SMOTE
import sklearn
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, confusion_matrix
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report
from sklearn.metrics import roc_curve, roc_auc_score


readindf = pd.read_csv("survey.csv")
names_of_og_cols = readindf.columns
print(names_of_og_cols)
readindf.drop(["Timestamp", "Name", "Current Year at UF", "Gender", "Age Range", "Would a website that helps you decide whether "
                "or not to go out be helpful for you?"], axis=1, inplace=True)
name_of_cols_no_dem = readindf.columns
print(name_of_cols_no_dem)

# print(readindf["Are you going out tonight?"].head())
#seperating target column and turning it into numerical value.
readindf["Target"] = readindf["Are you going out tonight?"].map({"Yes": 1, "No": 0})
readindf.drop(["Are you going out tonight?"], axis = 1, inplace=True)
print(readindf)

target_col = readindf["Target"]
print(target_col)

counts = readindf["Target"].value_counts()
plt.pie(counts, labels = counts.index, autopct='%1.1f%%')
plt.title("Target Class Distribution")
plt.show()
# weather is onehot
#mood, energy, responsibility is ordinal.

#encode weather categorical data
cat_col_onehot = [
                    "Forecasted Weather"
                    ]

ohe = OneHotEncoder(sparse_output=False, handle_unknown="ignore")
ohe_array = ohe.fit_transform(readindf[cat_col_onehot])
print("New OHE feature names:", ohe.get_feature_names_out(cat_col_onehot))

ohe_df = pd.DataFrame(ohe_array, columns = ohe.get_feature_names_out(cat_col_onehot))

df_ohe = pd.concat([readindf.reset_index(drop=True), ohe_df], axis=1)
df_ohe.drop(["Forecasted Weather"], axis=1, inplace=True)

print(df_ohe.columns)

#encode mood, energy, responsibility

#first mood (stressed, neutral, sad, relaxed, happy)

ord_mood_col = ["Mood Level Before Going Out (Throughout the Day)"]
categories_order = [["Stressed", "Sad", "Neutral", "Relaxed", "Happy"]]

oemood = OrdinalEncoder(categories = categories_order)
df_ohe["mood_ord"] = oemood.fit_transform(df_ohe[["Mood Level Before Going Out (Throughout the Day)"]])

print(df_ohe.columns)
print(df_ohe[["Mood Level Before Going Out (Throughout the Day)", "mood_ord"]].head())

#next, energy (Exhausted, Low Energy, Neutral, Energized, Extremely Energized)

ord_energy_col = ["Energy Level Before Going Out (Throughout the Day)"]
categories_order_energy = [["Exhausted", "Low Energy", "Neutral", "Energized", "Extremely Energized"]]

oeenergy = OrdinalEncoder(categories = categories_order_energy)
df_ohe["energy_ord"] = oeenergy.fit_transform(df_ohe[["Energy Level Before Going Out (Throughout the Day)"]])

print(df_ohe.columns)
print(df_ohe[["Energy Level Before Going Out (Throughout the Day)", "energy_ord"]])

#last, responsibility ("Low, Medium, High")
ord_responsibility_col = ["Responsibility Level Before Going Out (Throughout the Day)"]
categories_order_responsibility = [["Low (No deadlines in the next week)", "Medium (Deadlines in the next week)",
                                    "High (Deadlines in the next 3 days)"]]

oeresponse = OrdinalEncoder(categories=categories_order_responsibility)
df_ohe["responsibility_ord"] = oeresponse.fit_transform(df_ohe[["Responsibility Level Before Going Out (Throughout the Day)"]])

print(df_ohe.columns)
print(df_ohe[["Responsibility Level Before Going Out (Throughout the Day)", "responsibility_ord"]])

df_ohe.drop(["Mood Level Before Going Out (Throughout the Day)",
             "Responsibility Level Before Going Out (Throughout the Day)"
            ,"Energy Level Before Going Out (Throughout the Day)"], axis=1, inplace=True)
df_ohe["mood_x_responsibility"] = df_ohe["mood_ord"] * df_ohe["responsibility_ord"]


X = df_ohe.drop(["Target"], axis=1)
y = df_ohe["Target"]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.20, random_state=42, stratify=y)



rf_classifier = RandomForestClassifier(n_estimators=100, random_state=42)
rf_classifier.fit(X_train, y_train)
y_probs = rf_classifier.predict_proba(X_test)[:, 1]

for prob in y_probs[:10]:
    print(round(prob, 2))

fpr, tpr, thresholds = roc_curve(y_test, y_probs)
auc = roc_auc_score(y_test, y_probs)
print("ROC-AUC:", auc)

plt.figure()
plt.plot(fpr, tpr, label=f'ROC Curve, AUC = {auc}')
plt.plot([0,1], [0,1])
plt.xlabel("False Positive Rate")
plt.ylabel("True Positive Rate")
plt.legend();
plt.show();

y_pred = rf_classifier.predict(X_test);

accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy * 100:.1f}%")
cm = confusion_matrix(y_test, y_pred);
plt.figure(figsize=(5,4))
sns.heatmap(cm, annot=True, fmt='g', cmap="RdPu")
plt.title("Confusion Matrix for Random Forest")
plt.ylabel("Actual Label")
plt.xlabel("Predicted Label")
plt.show()





