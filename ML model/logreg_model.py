import datacleaning
from sklearn.model_selection import GridSearchCV

log_model = datacleaning.LogisticRegression(max_iter = 200)
param_grid = {
    'C': [0.01, 0.1, 0.5, 1, 10, 100],
}
search = GridSearchCV(estimator=log_model, param_grid=param_grid, cv=5, scoring='accuracy')
search.fit(datacleaning.X_train, datacleaning.y_train)
print(search.best_params_)

log_model1 = datacleaning.LogisticRegression(max_iter = 200, C=0.1)
log_model1.fit(datacleaning.X_train, datacleaning.y_train);
y_logpredict = log_model1.predict(datacleaning.X_test);
log_accuracy = datacleaning.accuracy_score(datacleaning.y_test, y_logpredict);
print(f"Accuracy: {log_accuracy* 100:.1f}");
print("Classification Report: ", datacleaning.classification_report(datacleaning.y_test, y_logpredict))

cm = datacleaning.confusion_matrix(datacleaning.y_test, y_logpredict);
datacleaning.plt.figure(figsize=(5,4))
datacleaning.sns.heatmap(cm, annot=True, fmt='g', cmap="RdPu")
datacleaning.plt.title("Confusion Matrix for Random Forest")
datacleaning.plt.ylabel("Actual Label")
datacleaning.plt.xlabel("Predicted Label")
datacleaning.plt.show()

fpr, tpr, thresholds = datacleaning.roc_curve(datacleaning.y_test, y_logpredict)
auc = datacleaning.roc_auc_score(datacleaning.y_test, y_logpredict)
print(f"ROC-AUC: {auc * 100:.1f}%")


