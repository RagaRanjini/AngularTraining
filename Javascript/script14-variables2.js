for(var a=0;a<10;a++)
  console.log(a)// 0 to 9
console.log(a) //10


for(let a=0;a<10;a++)
  console.log(a)// 0 to 9
console.log(a) //10

let a=90
for(let a=0;a<10;a++) //SyntaxError: Identifier 'a' has already been declared
  console.log(a)
console.log(a) 


const a=90
for(let a=0;a<10;a++) //SyntaxError: Identifier 'a' has already been declared
  console.log(a) // 0 to 9
console.log(a) //90


const a=90
for(let a=0;a<10;a++)
    console.log(a)

    console.log("------------")
    a=900//TypeError: Assignment to constant variable.
console.log(a)
    



