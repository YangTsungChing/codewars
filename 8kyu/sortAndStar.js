/*8 kyu
Sort and Star

DESCRIPTION:
You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.*/

// mySol 
function twoSort(s) {
    // parameter: a array of strings
    //process : sort the array based on their ASCII
    //my thinking is that we use the sort method combining with charCodeAT 
    //return the first value and with "***" between each character
    
    const arr = [...s]
    const sortCallBack =function(a,b){
        for(let i=0;i<a.length;i++){
        if(a.charCodeAt(i)!== b.charCodeAt(i)){
          return a.charCodeAt(i)-b.charCodeAt(i)}}
    }
  
    return arr.sort(sortCallBack)[0].split("").join("***")
    
  }
  //second sol
  
//this kata requests us to sort the array with ASCII 
//which is probably meaning UTF-16 code units value.
// so no need to provide anything inside the sort method , it would sort it automatically base on
//UTF-16 (and of course case-sensitive)
// but if it request to sort it alphabetically , we need to using localecompare 
function twoSort(s) {
    return [...s].sort()[0].split('').join('***')
    
  }