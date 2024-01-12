//Two Sum
/*Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).
twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
twoSum([3, 2, 4], 6) // returns [1, 2] or [2, 1]
*/
function twoSum(numbers, target) {
    //create an array of  all the combinations of two numbers from the input
    //by using double for loop 
    const combinationArr = []
   for (let i=0; i<numbers.length-1 ; i++){
         for (let j = i+1; j< numbers.length ;j++){
                combinationArr.push([i,j])}
   }
    return  combinationArr.filter(arr=> numbers[arr[0]]+numbers[arr[1]] === target ).flat()
}

//sol2 
function twoSum(numbers, target) {
    // parameter: an array of integers and a target number
    //return : the output will be the tuple that point to the two values in the array that when added togther gives the target
  // process:we can literate through the array and add two numbers together 
//and then when we find the two numb we return the it immediately and stop the loop!!
// here we need to use a double for loop 
//because we want to find every possible combinations of two num from the array
let output =[]
for(let i=0;i<numbers.length-1;i++){//exclude the last element 
  for(let j=i+1;j<numbers.length;j++){
      if (numbers[i]+numbers[j] === target){
          output.push(i);
            output.push(j)}
      }
  }
return output
}

//find this sol in the comments
// instead of double for loop , here's another solution to this kata: hash !!!
// double for loop has the time complexity of  O(n^2) meaning  for every item in the array
// you are going through every other item in the array at the same time as well.
//There is a solution that is O(n).
//We can use hashmap to  go through each item in the array a constant number of times ,
//but we still view each item in the array at least once. 
//It iterates through once and stores the index  in a hash. 
//Then iterates through again and uses the hash to find the index of the pair that adds to the target. 
//This is an example of trading space for time complexity.
function twoSum(numbers, target) {
    const hash = {};
    for(let i = 0;i<numbers.length; i++){
        const num1 = numbers[i]
        const num2 = target-num1     
        if(hash[num2]!== undefined ){return [i,hash[num2]]
        }
        hash[num1] = i                       
    }
}