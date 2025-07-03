# JavaScript Variables: `let`, `const`, and `var`

This example demonstrates the usage of `let`, `const`, and `var` in JavaScript, providing guidance on their differences, usage scenarios, and behavior.

---

## Instructions

1. **Copy the Code**:
   - Copy the provided code into your JavaScript environment or editor (e.g., Visual Studio Code, or an online editor like JSFiddle or CodePen).

2. **Define Values**:
   - Assign appropriate values to the variables based on the comments in the code.
     - Example: For `let name;` you could define a string like `"Juan Cruz"`.
     - Example: For `const pi = undefined;`, assign a value like `3.14159`.

3. **Run the Code**:
   - Execute the script in your browser's developer console or using a JavaScript runtime (like Node.js).
   - Observe the outputs of `console.log()` to understand how `typeof` works and the expected types of the variables.

4. **Experiment**:
   - Change the values of `let` and `var` variables to observe how they behave.
   - Attempt reassigning `const` variables to observe the errors and understand their immutability.

---

## Explanation of Variables

### 1. `let`
- Use `let` for variables that can be reassigned later.
- Block-scoped, meaning the variable is only accessible within the block where it is declared.
- Preferred for most variables that need flexibility.
- Example:
  ```javascript
  let count = 5;
  count = 10; // Reassignment is valid
### 2. const
- Use const for variables that must not change once assigned.
- Block-scoped like let.
- Must be initialized at the time of declaration.
- Preferred for constants or variables that should remain immutable.
Example:
```javascript
const pi = 3.14159;
pi = 4; // This will throw an error
```
### 3. var
- var is function-scoped and hoisted to the top of its scope.
- Not block-scoped, which may cause unintended behavior in modern applications.
- Its usage is generally discouraged in favor of let and const.
```javascript
var name = "John";
name = "Doe"; // Valid but less preferred
```

## Understanding typeof
The typeof operator is used to check the data type of a variable. The following types are commonly encountered:

- string
- number
- boolean
- object (arrays are a type of object)
- undefined (before assignment)