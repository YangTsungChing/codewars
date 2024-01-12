/*DESCRIPTION:
You will be given an array of objects representing data about developers 
who have signed up to attend the next web development meetup that you are 
organising. Three programming languages will be represented: Python, Ruby 
and JavaScript.

Your task is to return either:

true if the number of meetup participants representing any of the three 
programming languages is ** at most 2 times higher than the number of developers
 representing any of the remaining programming languages**; or
false otherwise.*/

function isLanguageDiverse(arr) {
    //need to check if the nubmers of  devs of one language is at most 2 times higer than the ohthers
    //to do this , we need to loop through it and get the count of each language and then 
   // make a comparison !!!finding the max an min and then return boolean depending on the result
     // here I am gonna use reduce method 
    const countForEachLanguage = Object.values(arr.reduce((acc,curr)=>
     (acc[curr.language]?acc[curr.language]+=1:acc[curr.language]=1 ,acc),{}
    ))
    return (Math.max(...countForEachLanguage)/Math.min(...countForEachLanguage)<=2)
   }isLanguageDiverse