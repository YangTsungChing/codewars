/*6 kyu
Sort the odd
DESCRIPTION:
Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]*/

 //this is from best practive not my own thinking 
function sortArray(array) {
    //input : an array of numbers
  // request: leave the even numbers in the arr at their OG positions
  // ,but sort the odd nubmers in ascending order. 
   //process: filter out all odd numbers ,sort it and store it in a variable
   // then, using map to loop through the array and replace the odd numbers with sorted ones.
  const odd = array.filter(num=> num%2 !==0).sort((a,b)=> a-b)
  return array.map(num=> num % 2 === 0 ? num: odd.shift())
  }