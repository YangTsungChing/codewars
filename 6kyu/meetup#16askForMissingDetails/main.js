//Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details
/*You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:

var list1 = [
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
write a function that

adds the question property to each object in the input array where the developer has not provided the relevant details (marked with a null value in JavaScript, with the default value in COBOL). The value of the question property should be the following string:
Hi, could you please provide your <property name>.

and returns only the developers with missing details:
[
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', 
  question: 'Hi, could you please provide your firstName.' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null, 
  question: 'Hi, could you please provide your language.' }
]
Notes:

At most only one of the values will be null / empty.
Preserve the order of the original list.
Return an empty array [] if there is no developer with missing details.
The input array will always be valid and formatted as in the example above.

*/
//my sol
function askForMissingDetails(arr) {
    //make a deep copy of the array first
    const deepArr = structuredClone(arr)
    //using map to loop through the array if there's null value inside, add the new property
    // then using filter to create the new array with question property .
    return deepArr.map(obj=>( Object
                              .values(obj)
                              .forEach((v,i)=>{if(v === null){
                                    obj.question = `Hi, could you please provide your ${Object.keys(obj)[i]}.`}
                               }), obj)).filter(obj => 'question' in obj)
                 
  }

  //my second sol without redundant looping method
  function askForMissingDetails(arr) {
    
    const deepArr = structuredClone(arr)
    //using filter to loop through the array if there's null value inside, add the new property, and return it, if not then return false.
    return deepArr.filter(obj=>( Object
        .values(obj)
        .forEach((v,i)=>{if(v === null){
              obj.question = `Hi, could you please provide your ${Object.keys(obj)[i]}.`}
         }),'question'in obj? obj:false))
                 
  }
       
  //my third sol 
  //removing redundant Object.values
function askForMissingDetails(arr) {
  
    const deepArr = structuredClone(arr)
  
    return deepArr.filter(obj=>( 
                                  Object.keys(obj)
                                  .forEach((key,i)=>{if(obj[key] === null){
                                    obj.question = `Hi, could you please provide your ${key}.`}}) ,
                                 'question'in obj? obj:false
                               ) 
                      )
                 
  }