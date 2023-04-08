function sample(){
    var a=30//30
    console.log(a)
    {
        var a=45 //-----> functional scope , so a is modified here which gets affected in this whole function
        console.log(a)//45
    }
    console.log(a) //45
}
sample()
//--------------------let variable--------------------------------------------------------------------------
function sample(){
    var a=30//30
    console.log(a)
    {
        let a=45 //-----> block level scope , so a is modified here which gets affected only in this block
        console.log(a)//45
    }
    console.log(a) //30
}
sample()
//--------------------------------------------------------------------------------------------------------------
function sample(){
    let a=30//30
    console.log(a)
    {
        let a=45 //-----> block level scope , so a is modified here which gets affected only in this block
        console.log(a)//45
    }
    console.log(a) //30
}
sample()
//-------------------------------------------------------------------------------------------------------------