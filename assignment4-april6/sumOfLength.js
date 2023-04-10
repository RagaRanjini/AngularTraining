// array=["Deepika","Abinesh","Kalaivani","Vijayalakshmi","Ranjini","Suganya"]
// const length_array=array.map(length_method)
// function length_method(string){
//     return string.length;
// }
// //console.log(length_array)
// result= length_array.reduce(sumoflength)
// function sumoflength(sum,len){
//     return sum+len
// }
// console.log("Sum of the length of all the string in list is "+result)

array=["Deepika","Abinesh","Kalaivani","Vijayalakshmi","Ranjini","Suganya"]
const length=array.reduce(sumoflength,0)
function sumoflength(sum,len){
    return sum+=len.length;
}
console.log("Sum of the length of all the string in list is "+length)