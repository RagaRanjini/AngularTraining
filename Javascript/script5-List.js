/*
An array is collection of objects
*/
a=[10,20,30,5,25,true,"string"]
console.log(a)//[ 10, 20, 30, 5, 25, true, 'string' ]
console.log(a[2])//30 {slicing not possible like in python }
console.log(a.length)//7
console.log(a[7])//undefined <--output
a[10]=1000
console.log(a)//[ 10, 20, 30, 5, 25, true, 'string', <3 empty items>, 1000 ]
console.log(a.length)//11