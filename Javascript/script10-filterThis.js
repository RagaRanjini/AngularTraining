//result= filterThis(callback, array);
//callback gets called as many times of number of elements in the array
//callback logic should return boolean value
//true elements will be part of result array while others not
function filterThis(callback,array){
    result=[]
    for (let x of array){
        if(callback(x)){
            result.push(x);
        }
    }
    console.log(result);
}
filterThis(function(x){
    return x%2==0? true:false;
},[23,45,66,55,222,20,90])
// fresult=filterThis(function(x){
//     if(x.length>5){
//         return true
//     }else{
//         return false
//     }
// },['hello','everyone','why'])
// console.log(fresult)