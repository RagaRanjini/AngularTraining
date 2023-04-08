a=20
function sample(){
    console.log(a) //20
    a=30
    console.log(a) //30
}
sample()
console.log(a) //30 --> change affected . thus, a inside function considered as global.
//--------------------------------------------------------------------------------------------
function sample(){
    a=30
    console.log(a) //30
}
sample()
console.log(a) //30 
//--------------------------------------------------------------------------------------------
function sample(){
     var a=30
    console.log(a) //30
}
sample()
console.log(a) //undefined ---> var made a has its scope only inside function
//--------------------------------------------------------------------------------------------
a=20
function sample(){
    var a=30
   console.log(a) //30
}
sample()
console.log(a) //20
//--------------------------------------------------------------------------------------------
a=20
function sample(){
    console.log(a) //undefined
     var a=30
    console.log(a) //30
}
sample()
console.log(a) //20
//var is used to have the scope of variable only inside function
//--------------------------------------------------------------------------------------------

