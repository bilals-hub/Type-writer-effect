const dynamicContent = document.getElementById("dynamic-text");
console.log(dynamicContent)

const pharses = ["FrontEnd Dev...", "Human being..." , "Learner..."];

let letterIndex = 0;
let pharseIndex = 0;



function printletters(pharse){
    if ( letterIndex == pharse.length){
        clearletters();
    } 
    else if (letterIndex < pharse.length){
        dynamicContent.textContent += pharse.charAt(letterIndex);
        letterIndex += 1;
        setTimeout(function(){
            printletters(pharse)
        }, 200)
    }
}

function clearletters(){
    if (letterIndex == -1) {
        pharseIndex = (pharseIndex+1) % pharses.length;
        letterIndex = 0;
        printletters(pharses[pharseIndex]);
    }
    else if (letterIndex > -1){
        let updatedPhrase = "";
        for(let index = 0; index < letterIndex; index++){
            updatedPhrase += pharses[pharseIndex].charAt(index);
            
            
        }
        dynamicContent.textContent = updatedPhrase
        
        letterIndex -=1;
        setTimeout(clearletters,100);
    }
    

}

printletters(pharses[pharseIndex]);