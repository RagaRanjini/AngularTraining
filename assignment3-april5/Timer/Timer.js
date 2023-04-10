var TodayDate=new Date();
var hours= 0;
var minutes= 0;
var seconds= 0;
var running=false;
let Storetime;
// console.log(hours+":"+minutes+":"+seconds);
// console.log(TodayDate);
document.getElementById("notify").innerHTML="Date: "+TodayDate.getDate()+"-"+TodayDate.getMonth()+"-"+TodayDate.getFullYear();
function startTimer(){
    if(!running){
        running=true;
        Storetime = setInterval(function(){
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
        clearInterval(Storetime)
    }else{
        alert("Timer is already stopped !");
    }
}
function resetTimer(){
    location.reload();
    }
