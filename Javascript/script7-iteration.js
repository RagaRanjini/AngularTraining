list=[10,20,30,40,50]
list[7]=70 //gives output as--> 0 1 2 3 4 7 --> skips the index of no values
for(let x in list) //method1
console.log(x) //prints index, not element
for(let x of list) //method1(b)
console.log(x) //prints value itself.
/*
10
20
30
40
50
undefined
undefined
70
*/