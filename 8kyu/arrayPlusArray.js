/*8 kyu
Array plus array
DESCRIPTION:
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/
//sol 1 
function arrayPlusArray(arr1, arr2) {

    return [...arr1,...arr2].reduce((acc,curr)=> acc+curr,0)
    }
//sol2
// using array.concat()
function arrayPlusArray(arr1, arr2) {

    return arr1.concat(arr2).reduce((acc,curr)=> acc+curr,0)
    }
//sol3
// here using rest parameter syntax
// theArgs is an array of all the argumnets!!!!
function arrayPlusArray(...theArgs){
    return  theArgs.flat(Infinity).reduce((acc,curr)=> acc + curr ,0)
 }