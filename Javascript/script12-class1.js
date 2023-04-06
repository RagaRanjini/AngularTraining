class info{
    constructor(data){
        this.data=data;
    }
    display(){
        console.log(this.data," is the data");
    }
    change(){
        // newData(function(value){
        //     this.data=value; //Cannot set properties of undefined (setting 'data')-------->error
        // }.bind(this)//solution
        // )
        newData((value)=>this.data=value); //no error, it works by arrow method.
    }
}
function newData(logic){
    let x=["India","Australia","New Zealand"];
    logic(x[Math.floor(Math.random()*2)])
}
obj= new info("cricket");
obj.display();
obj.change();
obj.display();
//-----------OUTPUT--------------
//cricket  is the data
//New Zealand  is the data
//-------------------------------