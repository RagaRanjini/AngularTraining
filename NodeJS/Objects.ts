// class person{
//     sno: number
//     name: string
//     city: string
// }-----------> 1
interface person {
    sno:number
    name:string
    city:string
}//---------------->2
//same output, this modification in code here modifies in js also.
const people: person[]=[
    {sno:1, name:"Ranjini",city:"Chennai" },
    {sno:2, name:"Raji",city:"Tuticorin"}
];
console.log(people);
// [
//     { sno: 1, name: 'Ranjini', city: 'Chennai' },
//     { sno: 2, name: 'Raji', city: 'Tuticorin' }
//   ]