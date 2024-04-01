const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let numberLength = 15
let randomPasswordOne= document.getElementById("passOne")
let randomPasswordTwo= document.getElementById("passTwo")

function getRandomLetter(){
    randomLetter=Math.floor(Math.random()*characters.length)
    return characters[randomLetter]
}
function getGeneratedPassword(){
    let generatedPassword = ""
    for (i = 0; i < numberLength; i++ ){
        generatedPassword += getRandomLetter()
    }
    return  randomPasswordOne.textContent=generatedPassword      
}

function getGeneratedPasswordTwo(){
    let generatedPassword = ""
    for (i = 0; i < numberLength; i++ ){
        generatedPassword += getRandomLetter()
    }
    return  randomPasswordTwo.textContent=generatedPassword      
}




