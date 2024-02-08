/*7 kyu
My Language Skills
Task
You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

Note: the scores will always be unique (so no duplicate values)

Examples
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []*/
// mySol
function myLanguages(results) {
    //input : a object containg language-score pairs
     // process: loop through the obj and find languages whose scores are at least 60
     //return an array of the requested items in descending order of the scores
     // using Object.keys
     return Object.keys(results)
                  .filter(key=> results[key]>=60)
                  .sort((a,b)=>results[b]-results[a])
   }