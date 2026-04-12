import datacleaning
from sklearn.model_selection import GridSearchCV
import joblib

log_model = datacleaning.LogisticRegression(max_iter = 200)
param_grid = {
    'C': [0.01, 0.1, 0.5, 1, 10, 100],
}
search = GridSearchCV(estimator=log_model, param_grid=param_grid, cv=5, scoring='accuracy')
search.fit(datacleaning.X_train, datacleaning.y_train)
print(search.best_params_)

final_model = datacleaning.LogisticRegression(max_iter = 200, C=0.1)
final_model.fit(datacleaning.X_train, datacleaning.y_train);
y_logpredict = final_model.predict(datacleaning.X_test);

log_accuracy = datacleaning.accuracy_score(datacleaning.y_test, y_logpredict);
print(f"Accuracy: {log_accuracy* 100:.1f}%");
print("Classification Report: ", datacleaning.classification_report(datacleaning.y_test, y_logpredict))

cm = datacleaning.confusion_matrix(datacleaning.y_test, y_logpredict);
datacleaning.plt.figure(figsize=(5,4))
datacleaning.sns.heatmap(cm, annot=True, fmt='g', cmap="RdPu")
datacleaning.plt.title("Confusion Matrix for Logistic Regression")
datacleaning.plt.ylabel("Actual Label")
datacleaning.plt.xlabel("Predicted Label")
datacleaning.plt.show()

y_logprob = final_model.predict_proba(datacleaning.X_test)[:, 1]
print(y_logprob[:5])
fpr, tpr, thresholds = datacleaning.roc_curve(datacleaning.y_test, y_logprob)
auc = datacleaning.roc_auc_score(datacleaning.y_test, y_logprob)
print(f"ROC-AUC: {auc * 100:.1f}%")

datacleaning.plt.figure()
datacleaning.plt.plot(fpr, tpr, label=f'ROC Curve, AUC = {auc}')
datacleaning.plt.plot([0,1], [0,1])
datacleaning.plt.title("ROC Curve Graph")
datacleaning.plt.xlabel("False Positive Rate")
datacleaning.plt.ylabel("True Positive Rate")
datacleaning.plt.legend();
datacleaning.plt.show();

joblib.dump(final_model, "final_model.pkl")
joblib.dump(datacleaning.ohe, "ohe_weather.pkl")
joblib.dump(datacleaning.oeenergy, "ordinal_energy.pkl")
joblib.dump(datacleaning.oeresponse, "ordinal_responsibility.pkl")
joblib.dump(datacleaning.oemood, "ordinal_mood.pkl")
joblib.dump(datacleaning.X.columns.tolist(), "feature_columns.pkl")

model = joblib.load("final_model.pkl")
print(model)
print(model.predict(datacleaning.X_test[:5]))
