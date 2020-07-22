var n =prompt("Enter a number to print multiplication table");
n = parseInt(n);
const table = document.getElementById('table');
console.log(table);
for( var i=1;i<=10;i++){
    table.innerHTML += `${n} X ${i} = ${n*i}<br>`;
}