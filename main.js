var inputField = document.querySelector("input")
button = document.querySelector("button")

function getCharCode(keyPressed) {
    var audioElement = document.querySelector(`audio[data-keyvalue="${keyPressed.keyCode}"]`)
    var divElement = document.querySelector(`.keys[data-keyvalue="${keyPressed.keyCode}"]`)

    if (!audioElement) console.log("Press valid key")
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
    document.body.style.zoom = "90%";
}

window.addEventListener("keydown", getCharCode);
var keys = document.querySelectorAll(".keys")

keys.forEach(element => {
    // console.log(element)
    element.addEventListener("transitionend", removeTransition)
});

button.addEventListener("click", showKeypad)