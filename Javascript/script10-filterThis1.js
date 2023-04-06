candidates=[
    {sno: 1,name:"Jose",skills:['c++','java','js']},
    {sno: 2,name:"Kiran",skills:['c++','c#','js','css','sql']},
    {sno: 3,name:"Mohit",skills:['c++','java','js','Angular','React']},
    {sno: 4,name:"Vinay",skills:['c++','java','js','android','IOS','Angular']},
    {sno: 5,name:"Arjun",skills:['c++','java','js','angular','IOS','MangoDB']}]

    function filterThis(callback,array){
        result=[]
        for (let x of array){
            if(callback(x)){
                result.push(x);
            }
        }
        return result
    }
result=filterThis(function(candidate){
    for(let y of candidate.skills)
        if(y.toLowerCase()=="c#" || y.toLowerCase()=="angular"){
            return true
        return false
    }
},candidates)
console.log(result)