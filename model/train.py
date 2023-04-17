import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import KFold
import pandas as pd

# Load the dataset from a CSV file
df = pd.read_csv('updated_data.csv')

# Split the dataset into features and target variable
X = df.drop('price', axis=1)
y = df['price']

# Print the shape of the feature and target variable arrays
print('Shape of X:', X.shape)
print('Shape of y:', y.shape)
print(df.columns)
# Set the number of folds for k-fold cross-validation
k = 5

# Initialize the k-fold cross-validator
kf = KFold(n_splits=k, shuffle=True)

# Initialize a list to store the evaluation metrics for each fold
fold_scores = []

# Loop through each fold
for train_idx, test_idx in kf.split(X):
    # Split the data into training and testing sets for this fold
    X_train, y_train = X.iloc[train_idx], y.iloc[train_idx]
    X_test, y_test = X.iloc[test_idx], y.iloc[test_idx]

    # Initialize a linear regression model
    model = LinearRegression()

    # Fit the model on the training data
    model.fit(X_train, y_train)

    # Evaluate the model on the testing data and store the score
    fold_score = model.score(X_test, y_test)
    fold_scores.append(fold_score)

# Calculate the average evaluation metric across all folds
avg_score = np.mean(fold_scores)

# Print the average evaluation metric
print('Average R-squared score:', avg_score)

# Define a dictionary with the feature values for the new house
new_house = {'bedrooms': 1.0, 'bathrooms': 2,'floors': 3, 'waterfront': 0, 'view': 1, 'condition': 1}

# Convert the dictionary into a Pandas DataFrame
new_data = pd.DataFrame(new_house, index=[0])

# Make a prediction on the new data using the loaded model
prediction = model.predict(new_data)

# Print the predicted price
print('Predicted price:', prediction[0])