window.addEventListener("keydown", getCharCode);

function getCharCode(keyPressed) {
    var audioElement = document.querySelector(`audio[data-keyvalue="${keyPressed.keyCode}"]`)
    if (!audioElement) console.log("Press valid key")
    else {
        audioElement.currentTime = 0;
        audioElement.play()
    }
}