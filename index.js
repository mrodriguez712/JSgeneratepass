const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passContainer = document.getElementById("pass-container")
let passContainerTwo = document.getElementById("pass-container-two")
let passLength = 15

function getGeneratedPass() {
    let passWord = ""
    for (let i = 0; i < passLength; i++) {
        passWord += getPassword()
    }   
    return passWord
}

function getPassword() {
    let randomPassword = Math.floor(Math.random() * characters.length)
    return characters[randomPassword]    
}

function password() {
    passContainer.textContent = getGeneratedPass()
    passContainerTwo.textContent = getGeneratedPass()
}





