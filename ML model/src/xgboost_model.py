import datacleaning
xg_model = datacleaning.XGBClassifier(objective="binary:logistic", n_estimators=100, learning_rate=0.01, max_depth=10);
xg_model.fit(datacleaning.X_train, datacleaning.y_train);
y_xgpredict = xg_model.predict(datacleaning.X_test);
xg_accuracy = datacleaning.accuracy_score(datacleaning.y_test, y_xgpredict);

print(f"XGBoost Accuracy: {xg_accuracy * 100:.1f}%");
print("Classification Report: ", datacleaning.classification_report(datacleaning.y_test, y_xgpredict));
cm = datacleaning.confusion_matrix(datacleaning.y_test, y_xgpredict);
datacleaning.plt.figure(figsize=(5,4))
datacleaning.sns.heatmap(cm, annot=True, fmt='g', cmap="RdPu")
datacleaning.plt.title("Confusion Matrix for XGBoost ")
datacleaning.plt.ylabel("Actual Label")
datacleaning.plt.xlabel("Predicted Label")
datacleaning.plt.show()

y_probs = xg_model.predict_proba(datacleaning.X_test)[:, 1]
for prob in y_probs[:10]:
    print(round(prob, 2))
fpr, tpr, thresholds = datacleaning.roc_curve(datacleaning.y_test, y_probs)
auc = datacleaning.roc_auc_score(datacleaning.y_test, y_probs)
print(f"ROC-AUC: {auc * 100:.1f}%")

datacleaning.plt.figure()
datacleaning.plt.plot(fpr, tpr, label=f'ROC Curve, AUC = {auc}')
datacleaning.plt.plot([0,1], [0,1])
datacleaning.plt.title("ROC Curve Graph")
datacleaning.plt.xlabel("False Positive Rate")
datacleaning.plt.ylabel("True Positive Rate")
datacleaning.plt.legend();
datacleaning.plt.show();

