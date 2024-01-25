/*7 kyu
Maximum Product
Task
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Notes
Array/list size is at least 2.

Array/list numbers could be a mixture of positives, negatives also zeroes .


//Input >> Output Examples

adjacentElementsProduct([1, 2, 3]); ==> return 6
adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14 */
function adjacentElementsProduct(array) {
    // input :an array of integers
    //process : loop through the array and multiply all two adjecent numbers and find the max 
    // output : the max product
    const productArr = []
    for(let i=0; i<array.length-1; i++){
      productArr.push(array[i]*array[i+1])  
    }
    return Math.max(...productArr)
  }
  