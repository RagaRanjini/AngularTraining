let countdown=10;
function count()
{
    document.getElementById("countdown").innerHTML=countdown;
    if(countdown===0)
    {
        clearInterval(seconds);
        document.getElementById("countdown").innerHTML="Success !!!";
        display() ;
    }
  
    else{
       countdown--;
    }
    
}
function display()
    {
        document.getElementById("gif").src="firework.gif";
        document.getElementById("gif").style.display="block";
    }
let seconds;
seconds=setInterval(count,1000)