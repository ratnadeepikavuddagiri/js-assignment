var n = prompt("Enter time : ","00:00:00");
var ar = n.split(':');
let sec=0;
let min=0;
let hr=0;

var status = setInterval(function() {
    document.getElementById("display").innerHTML ="0"+ hr+":"+"0"+ min + ":" + sec;
    if(hr==ar[0]&&min==ar[1]&&sec==ar[2]){
        clearInterval(status);
    }
    sec++;
    if (sec/60==1) {
      min ++;
      sec = 00;
      if (min/60 == 1) {
        hr++;
        min=00;
      }
    }
  }, 1000);


