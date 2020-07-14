// a var variable can be re-declared and updated and scope of the variable is global
// a let variable can be updated but cannot be re-declared and scope of the variable is within the block or local.but can be redeclared in that block itself.
// a const variable once declared cannot be updated.
var a = 56;
console.log(a);
a = 65;
console.log(a);
{
    let b = 30;
    console.log(b);
    b=20;
    console.log(b);
}
// console.log(b);
const c = 90;
console.log(c);
c=40;
console.log(c);