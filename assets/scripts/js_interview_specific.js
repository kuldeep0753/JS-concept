"use strict";

//TODO: Mapping Users to Get Usernames
// const users = [
//   { id: 1, name: "Jack", isActive: true, age: 20 },
//   { id: 2, name: "John", isActive: true, age: 18 },
//   { id: 3, name: "Mike", isActive: false, age: 30 },
// ];

//Q1: Write code to get an array of names from given array of users
//Best Approch-Senior level
// let store = users.map((obj)=>obj.name)
// console.log(store);

//Better Approch
// let storeUsers = []
// users.forEach((ele)=>{storeUsers.push(ele.name) });
// console.log(storeUsers)

//Good Approch --> using for loop

// Q2. to get the active user

// let filterUsers = users.filter((value)=>value.isActive === true).map((user)=>user.name);
// console.log(filterUsers);

// Q3. Sort users by age descending

// let ageSort = users.sort((user1,user2)=>(user1.age>user2.age?-1:1)).map((obj)=>obj.name);
// console.log(ageSort);

//TODO: Difference between null and undefined

//  Q1: What will be logged in this example?
// let var1;
// console.log(var1); //undefined
// console.log(typeof var1); //undefined

// Q2: What will be logged in this example?
// let var2 = null;
// console.log(var2); //null
// console.log(typeof var2); //Object

//TODO: Hoisting

//  Q1: What will be logged here?
// console.log(foo); //not defined
// foo = 1;

// Q2: What will be logged here?
// console.log(foo); // undefined
// var foo = 2;
//  Q3: What will be logged here?
// var foo;
// foo = 3;
// console.log(foo); //3

//TODO: Closures ----> Check

//  Q1: Create a counter function which has increment and getValue functionality;
// const counter = privateCounter();
// console.log(counter.getValue()); // 0
// counter.increment();
// console.log(counter.getValue()); // 1

//  Q2: Create a function which stores a secret string inside which is not
//  accessible but is returned only when we call this function.
// const getSecret = privateSecret();
// console.log(getSecret()); // 'secret'

//TODO: Currying
//  Q1: Write a function which helps to achieve multiply(a)(b) and returns
//  multiplication of a and
// function multiply(a) {
//   return function mul(b){return a*b};
// }

// console.log(multiply(2)(3)); // 6

// Q2: Create a curry function
// const curriedSum =(a)=>(b,c)=>a+b+c;
// const partiallyCurriedSum = curriedSum(1);
// console.log(partiallyCurriedSum(4,3));

//TODO: Adding Elements to the Array

// Q1: Write a function which get's an array and an element and returns an
// array with this element at the end.

// let arr=[2,3,4,5,1];
// function newArr(arr,ele){
// return [...arr,ele]
// }
// console.log(newArr(arr,34));

//TODO: Concatenating Arrays
// Q2: Write a function which can concatenate 2 arrays

// let arr1 = [4,5,6], arr2 = [2,1,8];

// console.log([...arr1,...arr2]);

//TODO: Check if User With Such Name Exists
// Q1: Write a function which accepts a list of users and a name to check
// if such user exists in the array.
const users = [
  { id: 1, name: "Jack", isActive: true },
  { id: 2, name: "John", isActive: true },
  { id: 3, name: "Mike", isActive: false },
];

//Map
// let listUser = users.map((user)=> user.name.toLowerCase());
// console.log(listUser);
// let name = "Jack";
// console.log(listUser.includes(name.toLowerCase()));

//Filter
function isNameExists(search, users) {
  if (users.filter((data) => data.name === search)) {
    return true;
  } else {
    return false;
  }
}
// console.log(isNameExists('Jack', users)); // true

//TODO: Remove All Duplicates in the Array
//  Q1: Write a function which removes all duplicates from the array.
const unique = [];
function uniqueArr(arr) {
  arr.map((value) => {
    if (!unique.includes(value)) {
      unique.push(value);
    }
  });
  return unique;
}
// console.log(uniqueArr([1, 1, 2,5,3,5,33,3,1,2])); // [1,2,5,3,33]

//TODO: Sorting the array
// Q1: Sort the array of numbers

// const numbers = [12, 87, 45, 23, 67, 90, 34, 56, 78, 11];
// const sorting = numbers.sort((a,b)=>a-b);
// console.log(sorting); // [11, 12, 23, 34, 45, 56, 67, 78, 87, 90]

//case sensitive, UpperCase>>>LowerCase
// const chars = ['A', 'g', 'X', 'm', 'Z', 'q', 'B', 'r', 'Y', 'p'];
// const sortChar = chars.sort();
// console.log(sortChar); //['A', 'B', 'X', 'Y', 'Z', 'g', 'm', 'p', 'q', 'r']

//Case Insensitive
// const caseInsensitive = chars.sort((a,b)=>a.localeCompare(b));
// console.log(caseInsensitive);

// Q2: Sort an array of objects by author's lastname
const books = [
  { name: "Harry Potter", author: "Joanne Rowling" },
  { name: "Warcross", author: "Marie Lu" },
  { name: "THe Hunger Games", author: "Suzanne Collins" },
];
// const authorName = books.map((book)=>{
//     return book.author;
// })
// console.log(authorName); //['Joanne Rowling', 'Marie Lu', 'Suzanne Collins']

// const lastName = authorName.map((last)=>last.split(" "));
// console.log(lastName); //[['Joanne', 'Rowling'],['Marie', 'Lu'],['Suzanne', 'Collins']];

// const storeLast = lastName.map((i)=>i[1]);
// console.log(storeLast); //['Rowling', 'Lu', 'Collins']

// const sortLastName = storeLast.sort();
// console.log(sortLastName); //['Collins', 'Lu', 'Rowling']

// let sortLastNameChain = books
//   .map((book) => book.author)
//   .map((last) => last.split(" "))
//   .map((lastValue) => lastValue[1])
//   .sort();
// console.log(sortLastNameChain);

// let secondWay = books.map((name) => name.author.split(" ").pop()).sort();
// console.log(secondWay);

//TODO: Writing Range Function
//  Q1: Write a function which implements a range
// function range(a,b){
//     const rangeArr = [];
//     for(let i =a; i<=b; i++){
//         rangeArr.push(i);
//     }
//     return rangeArr;
// }
// console.log(range(1, 50)); // [1,2,3,4,5...,50

//TODO: Writing Shuffle Function
// Q1: Write a shuffle function which mixes the elements
function shuffleItems(arr){
    
}
console.log(shuffleItems([1,2]))

//TODO: Find nearest element

const arr=[-8,0,1,4,12,17,25];

function elementFind(num){
  
}
