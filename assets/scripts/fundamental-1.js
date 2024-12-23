'use strict'
{/*

/** Javascript: sync and single threaded language to create interactive and dynamic websites
 * JS inject in html in three ways. inline,internal and external in the script tag
 * <noscript> used when script tag fails
 * ES6: ecamascript 6 new features added in it like spread,rest,destructure,arrow
 * Lexical structure: how to irganised a code for writing ny using tokens(keywords,literals,operator,identifier)
 * Charachter set: use unicode like a-z,A-Z, 0-9
 * Valid Identifiers: start from letter, $ or _;
 * Reserved Word: which already used for specific things like, let,while etc
 * Data Types: kind of data or value can hold a vaiable
 *  1.Primitive datatype: number,string,boolean,null,undefined,symbol and bigint
 *  2.Composite datatype: derived from primitive like function,object and array
 * 
 * Variables: declare by var,let and const
 * Scope of Variables: Global scope,Function/Local scope, Block scope eg let const in if else, Lexical scope like scope of a variable is determined by its position in the source code, Chain scope 
 * Dialog Boxes:Interacting with the User (old way to do)
        o    The alert() Method
        o    The prompt() Method
        o    The confirm() Method
    
*Types of Operators
        o    Arithmetic Operators add,subtract
        o    Shortcut Assignment Operators: x += 5;
        o    Autoincrement and Autodecrement Operators : ++,--
        o    Concatenation Operator: +
        o    Comparison Operators: >,<,==
        o    Logical Operators: &&,||,!
        o    The Conditional Operator: if-else
*Data Type Conversion
        o    The parseInt() Function: converts a string to an integer
        o    The parseFloat() Function : converts a string to an float
        o    The eval() Function: executes a string
        ### **Control Structures, Blocks, and Compound Statements**

- **Control Structures**: Manage the flow of the program (e.g., conditionals, loops).
- **Blocks**: Group multiple statements with `{}`.
- **Compound Statements**: Use `{}` to combine statements.

---

    ### **Conditionals**

            1. **if/else**: Executes one block if a condition is true, else another block.
            ```js
            if (age >= 18) { console.log("Adult"); } else { console.log("Minor"); }
            ```

            2. **if/else if**: Checks multiple conditions.
            ```js
            if (score >= 90) { console.log("A"); } else if (score >= 80) { console.log("B"); }
            ```

            3. **switch**: Matches a value against different cases.
            ```js
            switch(day) { case 1: console.log("Monday"); break; case 2: console.log("Tuesday"); }
            ```

---

    ### **Loops**

            1. **while Loop**: Repeats while a condition is true.
            ```js
            let i = 0; while (i < 5) { console.log(i); i++; }
            ```

            2. **do/while Loop**: Executes at least once, then repeats while a condition is true.
            ```js
            let i = 0; do { console.log(i); i++; } while (i < 5);
            ```

            3. **for Loop**: Repeats for a specified number of times.
            ```js
            for (let i = 0; i < 5; i++) { console.log(i); }
            ```

            4. **for/in Loop**: Iterates over object properties.
            ```js
            let obj = {a: 1, b: 2}; for (let key in obj) { console.log(key + ": " + obj[key]); }
            ```

---

    ### **Loop Control with `break` and `continue`**

            1. **break**: Exits the loop immediately.
            ```js
            for (let i = 0; i < 5; i++) { if (i === 3) break; console.log(i); }
            ```

            2. **continue**: Skips the current iteration and continues with the next.
            ```js
            for (let i = 0; i < 5; i++) { if (i === 2) continue; console.log(i); }
            ```

---

    ### **Nested Loops and Labels**

            1. **Nested Loops**: A loop inside another loop.
            ```js
            for (let i = 0; i < 3; i++) { for (let j = 0; j < 3; j++) { console.log(i, j); } }
            ```

            2. **Labels**: Used to break or continue outer loops.
            ```js
            outerLoop: for (let i = 0; i < 3; i++) { 
            for (let j = 0; j < 3; j++) { 
            if (i === 1 && j === 1) 
            break outerLoop; 
            } 
            }
            ```

    Debugg Code :
        Debugger: Pause code with breakpoints and inspect variables.
        Watches: Track specific variables during execution.
        DOM Inspections: Modify HTML/CSS directly in the Elements tab.
        Profiler: Measure how long code takes to execute.
        Console Logging: Use different log levels to track your code’s behavior.

 * */ 
const renderData = document.querySelector("#render-here");

const stringToInt = parseInt("12345");
console.log(stringToInt);


const stringToFloat = parseFloat("3.17");
console.log(stringToFloat);

const evaluate = eval(4*3);//no matter whether string or not
console.log(evaluate)

// New thing
    //TODO:The arguments object holds all the arguments passed to a function, even if they're not named in the declaration.
    function sum() {
        let total = 0;
        for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
        }
        return total;
    }
    let result = sum(1, 2, 3); // result = 6

    //TODO: Functions Are Objects
    function sayHello() {
        console.log("Hello!");
      }
      let greet = sayHello; // Function as an object
      greet();  // Output: "Hello!"


    }