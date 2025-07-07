/********************
 Step 1: Create Global Variables
 - Create two global variables (e.g., globalVar, anotherGlobalVar).
 - Assign any values you like.
********************/
var globalVar = 123;
var anotherGlobalVar = "Global";


/********************
 Step 2: Create a Function to Demonstrate Function Scope
 - Define a function (e.g., demoFunctionScope).
 - Inside this function:
   1. Declare a local variable (e.g., localVar).
   2. Log both the global variable(s) and the local variable to the console.
   3. Return a string that includes both the global and local variables.
********************/
function demoFunctionScope(){
  let demoVar = "Local";

  console.log(demoVar);
  console.log(globalVar);
  console.log(anotherGlobalVar);


  return `Global Variable: ${globalVar} and ${anotherGlobalVar}. Local Variable: ${demoVar}`;
}

/********************
 Step 3: Call the Function and Log Its Return Value
 - Call your function from Step 2 and store its result in a variable.
 - Use console.log() to display the return value in the console.
********************/
console.log(demoFunctionScope());


/********************
 Step 4: Demonstrate Block Scope
 - Write an if statement that always executes (if (true) { ... }).
 - Inside this block:
   1. Use let to declare a block-scoped variable (e.g., blockVar).
   2. Log the block-scoped variable within the block.
 - Try logging the same variable outside the block and observe what happens.
********************/

if (true){
  let blockVar =  "Block Var";
  console.log("Inside: " + blockVar);
}

console.log("Outside: " + blockVar);