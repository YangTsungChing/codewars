/*8 kyu
My head is at the wrong end!
DESCRIPTION:
You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

Simples!
["tail", "body", "head"] ===>  ["head", "body", "tail"] 
    
["bottom", "middle", "top"]  ===> ["top", "middle", "bottom"] 
["lower legs", "torso", "upper legs"] ===> ["upper legs", "torso", "lower legs"]
["ground", "rainbow", "sky"] ===> ["sky", "rainbow", "ground"] 
*/
//mysol
function fixTheMeerkat(arr) {
    const [tail,body,head]= arr
  return [head,body,tail]
  }