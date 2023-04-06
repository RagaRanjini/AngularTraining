// function givedata(){
//     setTimeout(()=>{
//         console.log("processing....");
//         return "INDIA";
//     },3000)
// }
// info=givedata();
// console.log("Something else....");
// console.log(info);
//asynchronous nature---> does something instead of waiting.(example: js)
//----------output---------------------------------------------------------------
//Something else....
//undefined
//processing....
//------------------------------------------------------------------------------
//no data returned , hence dont return data in asynchronous approach.
//use promise---> resolve,reject



// function givedata(){
//     return new Promise(
//         function(resolve,reject)
//         {
//             setTimeout(()=>{
//                 console.log("processing....");
//                 resolve("INDIA");
//             },3000)
//         }
//     )
// }
// result= givedata()
// result.then(
//     (success)=>console.log("Data is ",success),
//     (error)=>console.log(error)
// )
// console.log("something else");
// //----------output-------------------------
// //something else
// //processing....
// //Data is  INDIA


//-------------------PROPER METHOD--------------------------------------------------------------------
function givedata(){
    return new Promise(
        function(resolve,reject)
        {
            setTimeout(()=>{
                console.log("processing....");
                resolve("INDIA");
            },3000)
        }
    )
}
async function caller(){
    data=await givedata()
    console.log("Data is ",data)
}
// result= givedata()
// result.then(
//     (success)=>console.log("Data is ",success),
//     (error)=>console.log(error)
// )
console.log("something else");