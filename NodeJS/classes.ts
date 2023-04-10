class employee{
    private sno:number
    private name: string
    private city: string
constructor(sno:number,name:string,city:string){
    this.sno=sno ;
    this.name=name;
    this.city=city;
}
display():void{
    console.log(this.sno,this.name,this.city);
}
}