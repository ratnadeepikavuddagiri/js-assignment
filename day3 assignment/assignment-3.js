let n= prompt("Enter your marks")
//  using conditions
// if( n>50 && n<=100)
//     console.log(`Marks are ${n} and Grade is A`);
// else
//     console.log(`Marks are ${n} and Grade is B`)

// using switch-case

// switch(parseInt(n/50)){
//     case 0 :
//         console.log(`Marks are ${n} and Grade is B`);
//         break;
//     case 1 :
//         console.log(`Marks are ${n} and Grade is A`);
//         break;
//     case 2 :
//         console.log(`Marks are ${n} and Grade is A`);
// }

// using ternary operator
let v = n>50 && n<=100 ? "A" :"B";
console.log(`Marks are ${n} and Grade is ${v}`)

