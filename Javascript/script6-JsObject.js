//Dictionary in python, here it is js object
person={
    sno:1,
    name:"Raj",
    city:"chennai"
}
//sno,name,city --> properties
//it is not mandatory to include properties inside double quotes, but while using json it is mandatory
console.log(person)//{ sno: 1, name: 'Raj', city: 'chennai' }
console.log(person.name)//Raj
console.log(person['name'])//Raj <---accessing members
person.city="Mumbai"
person.skills=["python","java"]
console.log(person)//{ sno: 1, name: 'Raj', city: 'Mumbai', skills: [ 'python', 'java' ] }
//Conclusion --> Object structure in js is not fixed, it is flexible