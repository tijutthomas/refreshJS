# refreshJS

arrays.js --> 

filter() - The filter() method creates a new array with all elements that pass the test implemented by the provided function.
         Use Case: Find me all the items in the array that have the name "orange"
         
forEach() - The forEach() method executes a provided function once per array element.
         Use Case: Iterate through an array
 
map() - The map() method creates a new array with the results of calling a provided function on every element in this array.
Use Case: Parse and return a array of objects that contains a additional new property, full_name
map is now my favourite method to use in javascript-heavy applications which deal with manipulation of server-sent data. 

reduce() - The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) has to reduce it to a single value.
reduce(callback,initialValue) takes in two parameters, callback function and initialValue. The callback function itself takes in 4 parameters, prev and next, index and array. You just need to know prev and next.
prev refers to the first item in the array while next refers to the second item. But take note that if you pass in a initialValue, that prev will take on that initialValue and next will be the first value of the array.

Use Case: Parse the array and return an object that contains the number of times each string occured in the array.
