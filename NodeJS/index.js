//for node js project - run the command --> npm init (package json gets created)
//npm - node package manager
const fs=require("fs")// global constant variable fs imports file system(fs)
// fs.readFile("package.json")//reads in binary format so dont use like this
fs.readFile("package.json","utf-8",function(error,data){ //readFile calls this function
    if(error){
        console.log("Error reading file")
    }else{
        console.log(data)
    }
})

console.log("after file read") //gets printed first i.e before printing content of the file.
//asynchronous nature ->>> while reading the file itself , executes the print statement
//---------------function written using arrow method----------------------------------------------
// fs.readFile("package.json","utf-8",(error,data)=>{ //readFile calls this function
//     if(error){
//         console.log("Error reading file")
//     }else{
//         console.log(data)
//     }
// })
//-------------------------------------------------------------------------------------------------