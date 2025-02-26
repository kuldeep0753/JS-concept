// Practicing output-based questions

// 1. Pointer reference change
// let p = { name: "kss", age: 23 }; // 'p' holds a reference to an object
// const arr = [p]; // 'arr' holds an array with a reference to the same object

// p = null; // This only changes 'p' to null, but 'arr' still holds the object reference

// console.log(p); // Output: null (p is reassigned to null)
// console.log(arr); // Output: [{ name: "kss", age: 23 }] (arr still holds the object)

// 2. Type coercion in comparison
// let isEqual = 108 === [108]; 
// console.log(isEqual); // Output: false (strict equality, no type conversion, different types)

// console.log(typeof []); // Output: "object" (arrays are objects in JavaScript)

// 3. Sorting behavior in JavaScript
// let arr = [1, 20, 10, 3, 12];

// console.log(arr.sort()); 
// Output: [1, 10, 12, 20, 3] 
// Reason: Default sort() converts numbers to UTF-16 strings and sorts lexicographically.

// console.log(arr.sort((a, b) => a - b)); 
// Output: [1, 3, 10, 12, 20] 
// Fix: Providing a comparator function ensures numerical sorting.

//4.Flatten an array
        // a) Recursive method
        // const arr = [1, [2, [3, 4], 5], 6];
        // console.log(arr.flat());
        // console.log(arr.length)

        // function flattenArray(arr){
        // let result = [];
        
        // for(let item of arr ){
        //     if(Array.isArray(item)){
        //     result = result.concat(flattenArray(item));
        //     }
        //     else{
        //     result.push(item);
        //     }
        // }
        
        // return result;
        // }
        // console.log(flattenArray(arr));

        // b) ES 2019
        // console.log(arr.flat(Infinity));

        // c)sorting method
        
        // function stackFlatten(arr){
        //     let stack = [...arr];
        //     let result = [];

        //     while(stack.length){
        //         let item = stack.pop()
        //         if(Array.isArray(item)){
        //             stack.push(...item);
        //         }
        //         else{
        //             result.push(item);
        //         }
        //     }

        //     return result.reverse();
        // }

// 5. parseInt magic
    // console.log(parseInt("108")); 
    // console.log(parseInt("108*203"));
    // console.log(parseInt("108sdcsdvdsv"));

//6. Swap  numbers:
    // let a=12,b = 10;
    //swap number

    // [b,a]=[a,b];
    // console.log("a = ",a,"b = ",b);
