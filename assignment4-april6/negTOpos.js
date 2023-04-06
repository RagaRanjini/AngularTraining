array=[0,-3,10,-11]
const new_array=array.map(method)
function method(number){
    if(number>=0){
        return number;
    }else{
        return number*(-1);
    }
}
console.log(new_array)