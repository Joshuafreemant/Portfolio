export type LearningGroup = {
  theme: string;
  notebooks: string[];
};

export const mlLearning: LearningGroup[] = [
  {
    theme: "Data preprocessing",
    notebooks: [
      "Data Standardization",
      "Handling Missing Values",
      "Handling Imbalanced Dataset",
      "Label Encoding",
      "Numerical Dataset Pre-Processing",
      "Text Data Pre-Processing",
    ],
  },
  {
    theme: "Data sourcing & visualization",
    notebooks: ["Importing Datasets through Kaggle API", "Where to Collect Data for ML", "Pandas", "Matplotlib", "Seaborn"],
  },
  {
    theme: "Prediction models",
    notebooks: [
      "Diabetes Prediction",
      "Loan Prediction",
      "House Price Prediction",
      "Rock vs Mine Prediction",
      "Fake News Prediction",
    ],
  },
];
