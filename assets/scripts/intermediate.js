'use strict'
console.log("check");
/**
 * What Is a Function?
 * building block of a code which perform some operation or set of task
 ----    ----- ----
o    Function Declaration, Return Valuesand Invocation
    function add(a,b){ return a+b}; add()
----    ----- ----
o    Anonymous Functions as Variables
    let add =function (){}
----    ----- ----
o    Recursion: a function call itself;
    function fact(n){
    if(n!=1)
    return n*fact(n-1);
    }
    fact(5)
----    ----- ----
o    Functions Are Objects:
        First-Class Objects:
        Functions can be assigned to variables, passed as arguments, and returned from other functions.
----    ----- ----
o    Arrow Functions: introduced in ES6
        syntax:let calc = ()=>{}
----    ----- ----
    Optional Arguments
        function add(a,b,c?=0){return a+b+c}
    ----    ----- ----
    Argument list:mapped to the parameters defined in the function.
    'arguments' identifier: It contains all the arguments passed to the function,  regardless of the number of parameters defined.   
    ex. function showArguments() {
        console.log(arguments);
        }

        showArguments(1, 2, 3); 

//-------------
Function: Advanced concepts

Function as Data: same as a parameter
Anonymous function:done
Callbacks: A function passed as an argument to another function, executed later.
Self-invoking function: A function that is executed immediately after it is defined.
    Syntax: (function(){ ... })();
Inner (Private) Functions : local scope
Functions that Return Functions : recursive factorial example
Function: Rewriting itself:
      ex:      let initialize = function() {
        console.log("First-time setup done!");
        
        // Redefine the function to skip setup in future calls
        initialize = function() {
            console.log("Setup already done. Skipping...");
        };
        };

        initialize(); // Output: First-time setup done!
        initialize(); // Output: Setup already done. Skipping...
//------ ------- --------------
TODO: Done
Variable Scopes
Function Level
No Block Level
Global Level
o    Block Scoping (let & const)
//------ ----------- -------------
Objects: 
What Are Objects?: collections of key-value pairs,
    let person = {
  name: "John",
  age: 30,
  greet: function() {
    return "Hello, " + this.name;
  }
};
o    Objects and the Dot Syntax: conaole.log(person.name)
o    Creating an Object with a Constructor:
    let person1 = new Object();
o    Properties of the Object
    person1.name = "Ksk";
    person1.a=5;
    person1.b = 2;
    console.log(person["age"]); //Alternate way
o    Methods of the Object
    person1.add=function(){
    return this.a + this.b;
    }
    Deleting a property: delete person1.name;

//------ ------------ -----------
 Objects Categories
    Native objects (String, Number, Array, Image, Date, Math, etc.): inbuilt methods
    Host objects   (window, document, forms, etc.): these are Web API's provided by browser/dom/html element
    user-defined objects: Created using object literals, constructors, or classes.
    Destructuring: Extract values from objects or arrays and assign them to variables.
    ex: const candidateInfo = {name:"ksk",age:23,id:21};
        const {n,a,i}=candidateInfo;
    o   Spread : Expands elements of an array or object into individual elements or   properties.
    ex. const arr=[1,2,3];
        const b=[...arr,5,6,7];
        console.log(b);
    Rest Parameters: Collects multiple arguments into a single array;
    function add(a,b,..c){
    console.log(c);}
    add(1,2,3,4,5,6,7)

    ------ ------------ --------------
    JavaScript Core Objects
    What Are Core Objects? built-in objects provided by JavaScript to perform common operations eg.  Array, String, Number, Date, and Math.
    Array Objects
    o    Declaring and Populating Arrays
        eg. const arr=[];
            const arr = new Array(5);
            arr[0] = 12;
    o    Array Object Properties: length
    o    Associative Arrays: not a good practice
    o    Nested Arrays: multidimension array
    Array Methods: push,pop,shift,unshift,reduce,slice,splice,sort,filter,
    //---------- ----------- ------------
    The Date Object
    o    Using the Date Object Methods, Manipulating the Date and Time
            getDate() - Returns the day of the month.
            getHours() - Returns the current hour.
            getMinutes() - Returns the current minute.
            getSeconds() - Returns the current second.
            setDate() - Sets the day of the month.
            setFullYear() - Sets the year.
  
    o    Customizing the Date Object with the prototype Property
    The Math Object :
    o    Rounding Up and Rounding Down : round(),ceil(),floor()
    o    Generating Random Numbers: random()
    o    The String Object: toLowerCase(),length,toUpperCase()
    o    The Number Object:
        toFixed() - Formats a number to a specified number of decimals.
        toPrecision() - Formats a number to a specified precision.
    o    The Boolean Object: let check = new Boolean(true)
    o    The Function Object: Done

    //------------ ------------ ----------------
    o    Modules : export ,default and import like function/method or any variable
    Class and methods: 
     ex.   class Person {
            constructor(name, age) {
                this.name = name;
                this.age = age;
            }

            greet() {
                console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
            }
        }

        let person = new Person('John', 30);
        person.greet(); 
//---------- ----------- --------------
    Nodes: Parents, Children, and Siblings
    Here’s a concise, organized summary for easy memorization:

### **DOM Node Concepts:**
    1. **Parent, Child, Sibling Nodes**:
    - **Parent Node**: Contains child nodes.
    - **Child Nodes**: Nodes contained by a parent.
    - **Sibling Nodes**: Nodes sharing the same parent.

    2. **`nodeName` and `nodeType` Properties**:
    - **`nodeName`**: Returns the node's name (tag name for elements).
    - **`nodeType`**: Type of node (`1` for element, `3` for text, `8` for comment).

### **DOM Walking & Inspectors:**
1. **DOM Walking**: Traversing the DOM tree to interact with elements.
2. **DOM Inspectors**: Tools to inspect and manipulate the DOM (e.g., browser dev tools).

### **DOM Methods for Shortening the Walk:**
    1. **`document.getElementById()`**: Selects element by `id`.
    2. **`document.getElementsByTagName()`**: Selects elements by tag name.

### **JavaScript Properties for HTML Attributes:**
    1. **`getAttribute()`**: Retrieves an attribute value.
    2. **`setAttribute()`**: Sets an attribute value.

### **Modifying the DOM:**
    1. **`innerHTML` Property**: Modifies the content of an element as HTML.
    2. **Modify Content**: 
    - **`textContent`**: Modifies text content.
    - **`innerHTML`**: Modifies HTML content.
    3. **Creating New Elements**: `document.createElement()`.
    - Example: 
        ```javascript
        let newDiv = document.createElement('div');
        document.body.appendChild(newDiv);
        ```

    4. **Inserting Before a Node**: `insertBefore()`.
    - Example: 
        ```javascript
        document.body.insertBefore(newDiv, existingDiv);
        ```

    5. **Creating Attributes**: `setAttribute()`.
    - Example:
        ```javascript
        img.setAttribute('src', 'image.jpg');
     ```

### **DOM Tasks:**
    1. **Creating a Blog**: Dynamically creating blog posts.
    2. **Creating a Table**: Using `insertRow()` and `insertCell()` to build tables.

### **Cloning & Removing Nodes:**
    1. **`cloneNode()`**: Creates a copy of a node.
    - Example: `let clone = original.cloneNode(true);`
    2. **Removing a Node**: `removeChild()`.
    - Example: `element.parentNode.removeChild(element);`

### **Scrolling with Nodes:**
1. **Scroll Methods**:
  scrollTo(),scrollIntoView() and scrollBy()
 
  //--------- -------------- -----------
  Event Handling and the DOM
o    The HTML Inline Way, The Scripting Way, The DOM Way
o    Bubbling and Capturing
Event Listeners with the W3C Model
o    Adding an Event
o    Registering More Than One Event
o    Removing an EventListener
o    Event Listeners with Microsoft Internet Explorer
o    Event Properties Revisited
 */

// console.log(this===window);
// Closure
// function x(){
//     let i=10;
//     function y(){
//         console.log(i);
//     }
//     return y()
// }
// x(
//     )


//---------
//Map,reduce,filter
// const arr=[5,1,3,2,6];

// function maxValue(){
//     let temp=arr[0];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>temp){
//             temp=arr[i];
//         }
//     }
//     console.log(temp);
// }
// maxValue()

// let max=arr.reduce((acc,curr)=>{
//     if(curr>acc){
//         acc=curr;
//     }
//     return acc;
// },0)
// console.log(max);

// const users = [
//     { firstName: "John", lastName: "Doe", age: 26 },
//     { firstName: "Jane", lastName: "Smith", age: 32 },
//     { firstName: "Kuldeep", lastName: "Singh", age: 29 },
//     { firstName: "Marina", lastName: "Patel", age: 25 },
//     { firstName: "Liam", lastName: "Johnson", age: 32 },
//     { firstName: "Olivia", lastName: "Brown", age: 26 }
//   ];
  
//   let fullName=users.map((i)=>{
//    return i.firstName+" "+i.lastName;
//   });
//   console.log(fullName);

//   //{26:2,32:2,29:1,25:1}

//   let ageTotal = users.reduce((acc,curr)=>{
//     if(acc[curr.age]){
//         acc[curr.age]++;
//     }
//     else{
//         acc[curr.age]=1;
//     }
//     return acc;
//   },{})

//   console.log(ageTotal);

  //print firstName whose age is more than 28

//   let ageFilter = users.filter((i)=>i.age>28).map((i)=>i.firstName);

//   console.log(ageFilter);

// let agefilter = users.reduce((acc,curr)=>{
//     console.log(curr.firstName)
//     if(curr.age>28){
//       acc.push(curr.firstName);
//     }
//     return acc;
// },[])
// console.log(agefilter);

//Exercise on map,reduce and filter

//1
const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 }
  ];
//   ["Alice is 25 years old", "Bob is 30 years old", "Charlie is 35 years old"]

const printUsers = users.map((i)=>`${i.name} is ${i.age} years old`)
console.log(printUsers);

// 2
const students = [
  { name: "Emma", scores: { math: 85, english: 90 } },
  { name: "Liam", scores: { math: 78, english: 82 } },
  { name: "Olivia", scores: { math: 92, english: 88 } }
];
// // Expected output
// [
//     { name: "Emma", math: 85 },
//     { name: "Liam", math: 78 },
//     { name: "Olivia", math: 92 }
//   ]
const studentDetail = students.map((i)=>{
    return `{name: ${i.name}, math: ${i.scores.math}}`
}) 
  console.log(studentDetail);

//3
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Expected output
// [1, 3, 5, 7, 9]
const oddOne = numbers.filter((i)=>i%2===1)
console.log(oddOne);
//4
const users1 = [
    { name: "Alice", isActive: true },
    { name: "Bob", isActive: false },
    { name: "Charlie", isActive: true },
    { name: "David", isActive: false }
  ];
  
// // Expected output
// [
//     { name: "Alice", isActive: true },
//     { name: "Charlie", isActive: true }
//   ]

const trueOut = users1.filter((i)=>i.isActive )
console.log(trueOut);

//5
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
  ];
    // Expected output
// 90
  const sumOut = people.reduce((acc,curr)=>{
    acc +=curr.age;
    return acc;
  },0)
  console.log(sumOut);
//6
const products = [
    { name: "Apple", category: "Fruit" },
    { name: "Carrot", category: "Vegetable" },
    { name: "Banana", category: "Fruit" },
    { name: "Broccoli", category: "Vegetable" }
  ];
// Expected output
// {
//     Fruit: ["Apple", "Banana"],
//     Vegetable: ["Carrot", "Broccoli"]
//   }

const productOut = products.reduce((acc,curr)=>{
    // const temp=[];
if(curr.category == "Fruit"  ){
    acc.Fruit= `${curr.name}`
}else{
     acc.Vegetable=` ${curr.name}`
}
return acc;
},{})
console.log(productOut);
    
