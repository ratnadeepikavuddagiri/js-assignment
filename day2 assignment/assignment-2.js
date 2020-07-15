//ARRAYS

var array = ["Banana", "Orange", "Apple", "Mango"];
console.log(array);
array.splice(2, 1, "Lemon", "Kiwi"); //removes 1 element at index 2 and then adds 2 elements lemon and kiwi 
console.log(array);
var array1 = ["chemistry","physics","Biology"];
var array2 = array1.concat("Mathematics"); //adds mathematics to array1
console.log(array2);
var array3 = array.concat(array1); // concatenates array1 with array
console.log(array3)
console.log(array.slice(3));
console.log(array.slice(1,4));


//STRINGS

var string = "I am learning javascript now";
console.log(string.search("java"));
console.log(string.slice(5,10));
console.log(string.substring(5,10));
console.log(string.substr(5,10));
console.log(string.replace("javascript","python"));
var string1 ="    Deepika";
console.log(string1);
console.log(string1.trim());
console.log(string.charCodeAt(4));