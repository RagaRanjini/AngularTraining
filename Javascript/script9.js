// JavaScript source code
function first(a, b) {
    console.log(a,b)
}
first() //still runs a and b as unindefined
first(12) // b is treated as undefined
first(12, "Kousi") //right way
first('hello', 'kousii')//right way
first(12, 23, 34) // still runs and 34 is ignored since only two paramter is required
first([12, 23, 54], "hii")//can contain array and obj as parameters



function sample() {
    console.log("Sample function to understand")
}
store = sample
//sample reference is hold by store
// now store and sample are one and the same
store()

fun = function () {
    console.log("on the spot")
}
//here the above function does not have name
//hence it is anonymous function
fun()



//----------------------references----------------------
a = [1, 2, 3, 4, 5, 6, 7, 8]
a.push(90)
console.log(a)
b = a //now a will reflect in whatever changes made in b also
b.push("young")
console.log(a)
//both a and b are reflected
c = []
for (let x of a) 
    c.push(x)
    //c has a copy of the array a datas
console.log(c)
c.push("Jonyy")
console.log(c)
//jonyy will be updated in the c array
console.log(a)
//jonyy will not be reflected in a becoz c copied only datas.
//till es15

//----------------------spread---------------------------

a = [1, 2, 3, 4, 5, 6, 7, 8]
b = a
c = [...a]///copy the data from a
b.push(779)
console.log("BBBBBBBBBBB")
console.log(b)
console.log(a)
//whwn a value is pushed to b it will reflect to a and b but not to c 
console.log("CCCCCCCCCC")
c.push(65)
console.log(c)
//it is reflected to c 
console.log(a)



personAskills = ["java", "js"]
personBskills = [...personAskills, "angular", "react"]
console.log(personBskills)

categoryA = ["hii", "hello", "world"]
categoryB = ["welcome", "to", "jsworld"]
personCskills = [...personAskills, ...categoryA, ...categoryB, "thatsall"]
console.log(personCskills)



//---------objectspread-----------
lapA = {
    sn: "HAV645",
    ram: "8 GB",
    disk: "234 GB",
    os: "Windows 11"

}
lapB = { ...lapA, sn: "ASD242" }
console.log(lapB)

//--callback---



//---interval---


//setInterval(callback,num)
//callback-function which is expected to run
//number-time in ms

setInterval(function () {
    console.log(Math.round(Math.random()*10000))
}, 2000)



// 1) create javascript code that runs every two seconds that changes image src in html page such that it would create a slide show of images every 2 seconds.


// 2) download a image that is a gif that shows some fireworks whwn the page is loaded it should show a countdown for 30 seconds[note: this 30 sec countdown should be handled using set Interval and after 30 sec you can clear the func  using clearinterval]after 30 reconds show the fireworks{parellely use another func called setTimeout]


// 3) create  a timer by using set interval format should hh:mm:sec