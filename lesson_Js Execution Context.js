// JavaScript Execution Context Explained

// ____JavaScript Under Hood_____

/*
___ Global Execution Context___
Memory Creation           |     Code Execution  
var x = unndifined        |     x = 10
var x = 10

Golobal Executoin Context has been complete and vanish/delete/popOut
_______________________________________________________________________

_______JavaScript Execution Context Explained________
Execution context is a fundamental concept in JavaScript that determines how your code gets
executed. It's essentially the environment where JavaScript code is evaluated and executed.

________Types of Execution Contexts:_______
1) Global Execution Context (GEC):
*  Created when the JavaScript code first runs
*  Associated with the window object in browsers
*  Contains all global variables and functions
*  Only one GEC exists per JavaScript program

2) Function Execution Context (FEC):
*  Created every time a function is called
*  Each function gets its own execution context
*  Destroyed after the function completes execution

3) Eval Execution Context (less common):
*  Created when code is executed inside an eval() function

_________Components of an Execution Context:_______

1) Variable Environment (previously called Variable Object):
*  Stores variables, function declarations, and function arguments
*  Handles variable hoisting
*  In GEC, it's the global object (window in browsers
*  In FEC, it contains the function's arguments object

2) Lexical Environment:
*  Determines the scope chain for variable/function access
*  Contains the environment record (variables/functions)
*  References the outer environment (for scope chain)

3) "this" Binding:
*  Determines the value of the this keyword
*  Value depends on how the function is called

_______Execution Context Lifecycle:________

1) Creation Phase:
*  The context is created (but not executed yet)
*  Variable and function declarations are hoisted
*  Scope chain is established
*  this value is determined

2) Execution Phase:
*  Code is executed line by line
*  Variable assignments are processed
*  Function calls create new execution contexts
*/


var x = 20;

console.log(`Value of X is ${x}`);

var x = 10;