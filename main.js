var inputField = document.querySelector("input")
button = document.querySelector("button")


function playAudio(keyPressed) {
    var audioElement = document.querySelector(`audio[data-keyvalue="${keyPressed.keyCode}"]`)
    var divElement = document.querySelector(`.keys[data-keyvalue="${keyPressed.keyCode}"]`)

    if (!audioElement) return; //exit when key code is not present
    else {
        divElement.classList.add("keys-press")
        audioElement.currentTime = 0;
        audioElement.play();
    }
}

function removeTransition(event) {
    if (event.propertyName !== "transform") return;
    else this.classList.remove("keys-press")
}

function showKeypad() {
    inputField.focus();
    document.body.style.zoom = "80%";
}

window.addEventListener("keydown", playAudio);

var keys = document.querySelectorAll(".keys")
keys.forEach(element => {
    // console.log(element)
    element.addEventListener("transitionend", removeTransition)
});

button.addEventListener("click", showKeypad)