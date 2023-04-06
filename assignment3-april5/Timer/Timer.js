var TodayDate=new Date();
var hours= TodayDate.getHours();
var minutes= TodayDate.getMinutes();
var seconds= TodayDate.getSeconds();
// console.log(hours+":"+minutes+":"+seconds);
setInterval(function(){
if(seconds<10){
    document.getElementById("timer").innerHTML=hours+":"+minutes+":0"+seconds;
    seconds++;
}else{
    document.getElementById("timer").innerHTML=hours+":"+minutes+":"+seconds;
if(seconds==60){
    location.reload();
}else{
    seconds++;
}
}
},1000);

