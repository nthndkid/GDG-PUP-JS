/**
 * JavaScript Variables: let, const, and var
 * 
 * 1. let:
 *    - Used to declare variables that can be reassigned later.
 *    - Block-scoped: The variable exists only within the block where it's declared.
 *    - Preferred for variables whose values may change during program execution.
 *    - Example: let count = 5; count = 10; // Valid
 * 
 * 2. const:
 *    - Used to declare variables whose values cannot be reassigned.
 *    - Block-scoped like `let`.
 *    - Must be initialized at the time of declaration.
 *    - Preferred for constants or variables that should not change.
 *    - Example: const pi = 3.14159; pi = 4; // Error
 * 
 * 3. var:
 *    - Used to declare variables with function scope.
 *    - Hoisted to the top of its scope, but its value remains `undefined` until assigned.
 *    - Not block-scoped, which can cause unexpected behaviors.
 *    - Its usage is generally discouraged in modern JavaScript due to better alternatives (`let` and `const`).
 *    - Example: var name = "John"; name = "Doe"; // Valid
 */
 
// Using let
let name; // Define a string here, e.g., "Juan Cruz"
let age; // Define a number here, e.g., 30
let isStudent; // Define a boolean here, e.g., true or false
let hobbies; // Define an array here, e.g., ["reading", "gaming", "coding"]

// Checking types and values
console.log(typeof name); // Output: should be "string"  (until a value is assigned)
console.log(typeof age); // Output: should be "number" (until a value is assigned)
console.log(typeof isStudent); // Output:  should be "boolean" (until a value is assigned)
console.log(typeof hobbies); // Output: should be "object" (until a value is assigned)

// Using const
const pi = undefined; // Define a number here, e.g., 3.14159
const birthYear = undefined; // Define a number here, e.g., 1990
const isEmployed = undefined; // Define a boolean here, e.g., true or false
const favoriteBooks = undefined; // Define an array here, e.g., ["1984", "Brave New World", "Fahrenheit 451"]

// Checking types and values
console.log(typeof pi); // Output: should be "number" (until a value is assigned)
console.log(typeof birthYear); // Output: should be "number" (until a value is assigned)
console.log(typeof isEmployed); // Output: should be "boolean" (until a value is assigned)
console.log(typeof favoriteBooks); // Output: should be "object" (until a value is assigned)

// Using var
var city; // Define a string here, e.g., "New York"
var temperature; // Define a number here, e.g., 22.5
var hasPets; // Define a boolean here, e.g., true or false
var colors; // Define an array here, e.g., ["red", "green", "blue"]

// Checking types and values
console.log(typeof city); // Output: should be "string" (until a value is assigned)
console.log(typeof temperature);  // Output: should be "number" (until a value is assigned)
console.log(typeof hasPets); // Output: should be "boolean" (until a value is assigned)
console.log(typeof colors); // Output: should be "object" (until a value is assigned)
