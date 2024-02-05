/*
6 kyu
Counting Duplicates
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/
//my sol 
function duplicateCount(text){
    //so input is a string
    // process : got to loop through the string to find the count of char that occurs more than once
    // then return the count
  const hash = text
                .split('')
                .reduce((acc,curr)=> 
                    ( curr.toLowerCase() in acc? 
                      acc[curr.toLowerCase()] += 1:
                       acc[curr.toLowerCase()] = 1 ,acc),{}
                       )
  return Object.values(hash)
         .filter( count => count > 1 ).length
  
  
  }

  // alternative
  //refactor: use a short circuit OR operator in reduce method instead of using a ternary operator  
function duplicateCount(text){
  //input: a string 
   //process:loop through the string and count the occurrence of each char, 
   // then return the count of  how many chars occurr more than once !!!
 const hash =text.toLowerCase()
                 .split('')
                 .reduce((acc,curr)=> (acc[curr] =( acc[curr]||0)+1,acc ),{})
 return Object.keys(hash).filter(k=>hash[k] >1).length
  
 }