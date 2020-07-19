var n =prompt("Total sales made by an employee");
var n= parseInt(n);

var r = 0
if(n>=0 && n<=5000)
    r += (n*2)/100;
if(n>5000 && n<=10000)
    r += (n*5)/100;
if(n>10000 && n<=20000)
    r += (n*7)/100;
if(n>20000)
    r += n/10;

console.log(`Total sales made is ${n} and total commision earned is${r}`)