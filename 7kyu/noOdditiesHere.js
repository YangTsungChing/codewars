/*7 kyu
No oddities here
//Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.

*/
function noOdds( values ){
    // input : an array of interger
     // process: loop through the array and filter out the even numbers,then put them into a new array
     // output :the new array with all the even nubmers in the order that they are given
     // using array.filter()
     return values.filter(num=> num%2 === 0)
   }