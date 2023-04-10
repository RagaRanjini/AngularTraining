// students=[
//     {name: "Ranjini", marks: 89},
//     {name: "Suganya", marks: 91},
//     {name: "Deepika", marks: 71},
//     {name: "Abinesh", marks: 58},
//     {name: "Kalaivani", marks: 65},
//     {name: "viji", marks: 70}
// ]
// const new_array=students.map(method)
// function method(students){
//     return students.marks
// }
// var high= new_array[0];
// var index=0,i=0;
// for(let x of new_array){
//     if(x>high){
//         high=x;
//         index=i;
//     }
//     i++;
// }
// // console.log(Math.max.apply(null,new_array));
// console.log("Maximum Mark is "+high+" scored by "+students[index].name);

students=[
    {name: "Ranjini", marks: 89},
    {name: "Suganya", marks: 91},
    {name: "Deepika", marks: 71},
    {name: "Abinesh", marks: 58},
    {name: "Kalaivani", marks: 65},
    {name: "viji", marks: 70}
]
var topstudent=students[0];
students.map(method)
function method(student){
    if(topstudent.marks<student.marks){
        topstudent=student;
    }
    return topstudent;
}
console.log("Maximum Mark is "+topstudent.marks+" scored by "+topstudent.name);
