var TodayDate=new Date();
var hours= 0;
var minutes= 0;
var seconds= 0;
var run=0;
var pause=0;
// console.log(hours+":"+minutes+":"+seconds);
function startTimer(){
    run++;
    if(run==1){
        setInterval(function(){
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
    current_hour=hours;
    current_minute=minutes;
    current_second=seconds;
    document.getElementById("notify").innerHTML="Timer stopped at "+current_hour+":"+current_minute+":"+current_second;
    alert("Timer stopped at "+current_hour+":"+current_minute+":"+current_second);
    location.reload();
    }
