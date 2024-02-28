/*6 kyu
Find the unique number
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

*/
// mySol
function findUniq(arr) {
    // input an array of numbers
    // process : find the number that occurs only once 
    // return : the only number that occurs only once
    //my thinking : creat a hash tha contains the occurrence of each number
    //Object.keys return an array of all the "string" keys
    
    const hash = arr.reduce((acc,curr)=>
                    (acc[curr] = (acc[curr]||0) + 1 ,acc) ,{})
    return Number(Object.keys(hash).find(key=> hash[key]===1 ))
  }