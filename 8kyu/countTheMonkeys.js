/* 8kyu count the monkeys
DESCRIPTION:
You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example(Input --> Output):

10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 1 --> [1]*/


 //my sol
 function monkeyCount(n) {
    //input : a number n
     //process : creating a new array and using loop to put the counted numbers into the array
     //output : the array
     const output = []
     for(let i= 1; i<=n; i++){
     output.push(i)
     }
     return output
   }