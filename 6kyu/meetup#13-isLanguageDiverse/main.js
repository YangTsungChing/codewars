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