let colors=["blue","pink","yellow","black","green"];
 var i=0;

function changeBg(){
        document.body.style.backgroundColor=colors[i];
        i++;
        if(i>colors.length - 1)
            i=0;
}
setInterval(changeBg,5000);
    
