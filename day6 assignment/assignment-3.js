let name = prompt("Enter your name");

var head = document.getElementById('heading');
head.innerText += `Welcome!! ${name}`;


const ctime = document.getElementById('time');
function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}

clock();

setInterval(clock,1000);

const text = document.getElementById('text');
const button = document.getElementById('btn');


button.onclick = ()=>{
    
    if(button.innerText == "Dark Mode"){
        button.innerText = "Light Mode"
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }
    else{
        button.innerText = "Dark Mode";
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
}