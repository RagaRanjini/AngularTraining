const axios = require ("axios");
async function randomquote(){
    try{
        response=await axios.get("https://api.quotable.io/random")
        console.log(response.data)
    }catch(e){
        console.log(e)
    }
}
randomquote();
console.log("After code....");
// After code....
// {
//   _id: 'DBkTDkczWkg',
//   content: "You can't shake hands with a clenched fist.",
//   author: 'Indira Gandhi',
//   tags: [ 'wisdom' ],
//   authorSlug: 'indira-gandhi',
//   length: 43,
//   dateAdded: '2019-02-11',
//   dateModified: '2022-07-04'
// }