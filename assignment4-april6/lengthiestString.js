// array=["Deepika","Abinesh","Kalaivani","Vijayalakshmi","Ranjini","Suganya"]
// const length_array=array.map(length_method)
// function length_method(string){
//     return string.length;
// }
// var highest_length= length_array[0];
// var index=0,i=0;
// for(let x of length_array){
//     if(x>highest_length){
//         highest_length=x;
//         index=i;
//     }
//     i++;
// }
// console.log("Highest length is "+highest_length+" and the string is "+array[index]);

array=["Deepika","Abinesh","Kalaivani","Vijayalakshmi","Ranjini","Suganya"]
var lengthiest=array[0];
const length=array.map(length_method)
function length_method(string){
    if(string.length>lengthiest.length){
        lengthiest=string;
    }
    return lengthiest;
}
console.log("Highest length is "+lengthiest.length+" and the string is "+lengthiest);