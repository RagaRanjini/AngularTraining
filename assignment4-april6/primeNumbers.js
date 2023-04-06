array = [5,8,2,1,10,15,17]
const new_array=array.filter(primeMethod);
function primeMethod(number){
    // let flag=0;
    for(let i=2;i<number-1;i++){
        if(number%i==0){
            // flag=1;
            // break;
            return false
        }
    }
    return true
}
console.log(new_array)