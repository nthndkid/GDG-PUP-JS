# JavaScript Assignment No. 3: Conditional Statements (If-Else)💻🔄❓

## Description
This project involves building a simple age-checking application using JavaScript. The goal is to categorize users based on their age: Child, Teenager, or Adult. The HTML and CSS files are already provided, and your task is to implement the logic using JavaScript with **if-else statements** to check the user's age and display the correct category. 

These images will serve as guides to your final output:
![](https://i.imgur.com/yAy7NFE.png)
![](https://i.imgur.com/CajHeH5.png)

## Provided Files
The following files are provided for you to complete this task:

- **index.html**: Contains the structure of the application. You do not need to modify this file, but you will interact with it through your JavaScript code.
- **styles.css**: Contains the styling for the application. This file also doesn't require changes, but you will see the result once you implement the JavaScript.

## Instructions

### 1. **script.js**

In this file, you will implement the `checkAge()` function. This function will:

#### Retrieve the User's Age Input:
- The user's age is retrieved using `document.getElementById('ageInput').value`. This fetches the value from the input field with the ID `ageInput`. 

#### Categorize the Age:
- Use **if-else statements** to check the user's age and categorize them:
    - **Child**: If the age is between 0 and 12, set the `category` variable to "Child".
    - **Teenager**: If the age is between 13 and 19, set the `category` variable to "Teenager".
    - **Adult**: If the age is 20 or greater, set the `category` variable to "Adult".
    - **Invalid Age**: If the age is a negative number or any other invalid input, set the `category` variable to "Invalid age. Please enter a valid number."

### Tips: 
- **Double-check Reference Links**: Ensure all reference links (e.g., images, stylesheets) are correct and accessible. 
- **Input Validation**: Make sure your JavaScript code properly handles unexpected inputs (e.g., negative numbers or non-numeric characters). 
- **Browser Compatibility**: Test your application on different browsers to ensure consistent performance. 
- **Comment Your Code**: Add comments in your JavaScript code to explain what each part does. This will make it easier to understand and maintain. 
- **Code Formatting**: Use consistent code formatting to enhance readability. Tools like Prettier can help with this.
- **Testing**: Test your age-checking function thoroughly to ensure all edge cases are handled correctly.