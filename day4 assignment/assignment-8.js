let ask=( question,yes,no)=>{
    if(confirm(question)) yes()
    else no();
}
ask("Do you agree?",function(){alert("You Agreed");},function(){alert("You cancelled the execution");});