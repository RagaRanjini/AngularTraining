//wraps data and methods together --> definition
function student(sno,name){
    console.log(this) //points to object, for node js it is global , for browser it is window
}
student() //object [global]
new student() // student {}
//----------------------------------------------------------------------------------------------
function student(sno,name){
    this.sno=sno;
    this.name=name;
    console.log(this)
    //student { sno: 1, name: 'Aarya' }
    //student { sno: 2, name: 'Raghav' }
}
a=new student(1,"Aarya")
b=new student(2,"Raghav")
//------------------------------------------------------------------------------------------------
student.prototype.display=function(){
    console.log("sno: "+this.sno+" Name: "+this.name);
}
a=new student(1,"Aarya")
b=new student(2,"Raghav")
//student { sno: 1, name: 'Aarya' }
//student { sno: 2, name: 'Raghav' }
a.display()
b.display()
//sno: 1 Name: Aarya
//sno: 2 Name: Raghav
//------------------------------------------------------------------------------------------------