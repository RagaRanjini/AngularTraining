var res=0, sum=0 ;
function sample(callback1,callback2,number1,number2){
    console.log("sample function started");
    var result=callback1(number1)+callback2(number2);
    console.log("Sample function ended and the result is ",result);
}
sample(
    function(number1){
        var temp= number1;
    while(temp>0){
        var rem= temp%10;
    res= (res*10)+rem;
    temp=Math.floor(temp/10);
    }
    return ""+res;
    },
    function(number2){
        var temp= number2;
    while(temp>0){
        var rem= temp%10;
    sum= sum+ rem;
    temp=Math.floor(temp/10);
    }
    return ""+sum;
    }, 123,345
);