//7 kyu
//Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages
/*DESCRIPTION:
 given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an object which includes the count of each coding language represented at the meetup.

For example, given the following input array:
var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];
your function should return the following object (associative array in PHP, table in COBOL):

{ C: 2, JavaScript: 1, Ruby: 1 }
Notes:

The order of the languages in the object does not matter.
The count value should be a valid number.
The input array will always be valid and formatted as in the example above.*/

//my first sol using ternary in the reduce 
function countLanguages(list) {
    // return an object including the counts of each coding language 
    // got to loop through the array of objects and 
    // add up the occurrence of each language
     // here you can use reduce !!!1
   return list.reduce(
        (acc,curr)=> 
        (acc[curr.language] ? acc[curr.language] +=1 : acc[curr.language]=1 ,acc ),{}
       )
 }

 //my second sol using short circuit behavior in the reduce 
 // short circuit behavior: expr1 || expr2
//if expr1 is truthy , then it returns expr1 without evaluating expr2 
//if expr1 is falsy , then it returns expr2
// this behavior is very useful for looping through the array and we want to skip the first element
// like   const arr = [2,3,4]; 
  // arr.forEach((e,i,arr) =>i===0||arr[i] = Math.pow(e,2)) 
  //output: [2,9,16]
function countLanguages(list) {
    return list.reduce( 
          (acc,curr)=>(acc[curr.language] = (acc[curr.language]||0)+1 , acc) ,{} 
        )
 }


