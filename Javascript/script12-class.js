//no access specifiers in js
class student{
    sno;
    name;
    constructor(sno,name){ //constructor
        this.sno=sno;
        this.name=name;
    }
    display(){
        console.log(this.sno, this.name);
    }
}
a=new student(1,"Aarya")
b=new student(2,"Raghav")
a.display()
b.display()
//1 Aarya
//2 Raghav