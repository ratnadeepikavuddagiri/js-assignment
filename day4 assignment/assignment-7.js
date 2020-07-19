var n =prompt("Enter a number");
n = parseInt(n);

for(let i = 2;i<=n;i++){
    var c=0;
    for(let j=2;j<=i;j++){
        if(i%j==0)
        c++;
    }
    if(c==1)
    console.log(i);
}