var a = prompt("Enter operand1");
var c = prompt("Enter operator");
var b = prompt("Enter operand2");

a=parseInt(a);
b=parseInt(b);

switch(c){
    case '+' : var r = a+b;
               break;
    case '-' : var r = a-b;
               break;
    case '*' : var r = a*b;
               break;
    case '/' : var r = a/b;
               break;
    case '^' : var r = Math.pow(a,b);
               break;
    case '%' : var r = a%b;
               break;

}
console.log(`operand 1 is ${a} operand 2 is ${b} and result is ${r} `)