a=[34,34,"Ram",{sno:1, name: "raj",cuty: 'chennai'}] // can use "" also '' for string
console.log(typeof(a[3])) //object
console.log(a.length)//4
a[-10]="Ajay"
console.log(a.length)//4 --> thus ignores negative index
for(let x in a)
console.log(x) //0 1 2 3 -10 --> takes the negative index
