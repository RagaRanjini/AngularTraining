students=[
    {name: "Ranjini", marks: 89},
    {name: "Suganya", marks: 91},
    {name: "Deepika", marks: 71},
    {name: "Abinesh", marks: 58},
    {name: "Kalaivani", marks: 65},
    {name: "viji", marks: 70}
]
const new_array=students.filter(method)
function method(students){
    return students.marks>70
}
console.log(new_array)