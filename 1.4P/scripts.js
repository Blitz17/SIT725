const randomTexts = ["TEXT1", "TEXT2", "TEXT3", "TEXT4", "TEXT5", "TEXT6", "TEXT7", "TEXT8", "TEXT9", "TEXT10"];
        
function generateRandom() {
    const randomText = randomTexts[Math.floor(Math.random() * randomTexts.length)];
    const randomNumber = Math.floor(Math.random() * 1000); 
    document.getElementById("display").innerText = `${randomText} - ${randomNumber}`;
}

setInterval(generateRandom, 5000);