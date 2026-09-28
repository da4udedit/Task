

const nameInput = document.getElementById("nameInput");
const nameButton = document.getElementById("nameButton");
const message = document.getElementById("message");

nameButton.addEventListener("click", function () {

    const name = nameInput.value.trim();

    if (name === "") {
        message.textContent = "Zəhmət olmasa adını yaz! 😊";
    } else {
        message.textContent = "Salam, " + name + "! 👋";
    }

});



document.getElementById("redButton").addEventListener("click", function () {
    document.body.style.backgroundColor = "#ffe5eb";
});

document.getElementById("greenButton").addEventListener("click", function () {
    document.body.style.backgroundColor = "#dff8e7";
});

document.getElementById("yellowButton").addEventListener("click", function () {
    document.body.style.backgroundColor = "#fff5bf";
});

document.getElementById("blueButton").addEventListener("click", function () {
    document.body.style.backgroundColor = "#d9f7ff";
});




const emojis = [
    "🐱",
    "🐶",
    "🦊",
    "🐼",
    "🐸",
    "🦁",
    "🐯",
    "🐨",
    "🐰",
    "🦄",
];

let emojiIndex = 0;

document.getElementById("emojiButton").addEventListener("click", function () {

    emojiIndex++;

    if (emojiIndex >= emojis.length) {
        emojiIndex = 0;
    }

    document.getElementById("emoji").textContent = emojis[emojiIndex];

});