a=20 
b="Arjun"
c=true
d=30.34
console.log(a,b,c,d)//20 Arjun true 30.34
console.log(typeof(a),typeof(b),typeof(c),typeof(d))//number string boolean number (no float !)
function sample(){
    console.log("Hi") //function definition
}
sample() //function call
window.sample() //works on browser, not in node .js