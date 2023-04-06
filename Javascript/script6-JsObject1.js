people=[
    {sno:1,name:"rahul",city:"chennai"},
    {sno:2,name:"rag",city:"chennai"},
    {sno:3,name:"ragni",city:"chennai"},
    {sno:4,name:"raji",cityb:"chennai"}
]
console.log(people[3].city)//undefined --> problem, for which typescript can provide solution.
people[3].state="TamilNadu" //valid in js, causing damage to consistency of properties.
console.log(people[3])//{ sno: 4, name: 'raji', cityb: 'chennai', state: 'TamilNadu' }