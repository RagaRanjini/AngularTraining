var TodayDate=new Date();
var hours= 0;
var minutes= 0;
var seconds= 0;
var running=false;
var intervalID=null;
let timeref
// console.log(hours+":"+minutes+":"+seconds);
function startTimer(){
    if(!running){
        running=true;
        timeref = setInterval(function(){
            document.getElementById("timer").innerHTML=String(hours).padStart(2, '0')+":"+String(minutes).padStart(2, '0')+":"+String(seconds).padStart(2, '0');
            if(seconds==60){
                minutes++;
                seconds=0;
            }
            if(minutes==60){
                hours++;
                minutes=0;
            }
            seconds++;
        },1000);
    }else{
        alert("Timer is already running !");
    }
}
function stopTimer(){
    if(running){
        running=false;
        clearInterval(timeref)
    }else{
        alert("Timer is already stopped !");
    }
}
function resetTimer(){
    location.reload();
    }
