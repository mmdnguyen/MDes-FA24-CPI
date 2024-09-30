let generateBtn = document.getElementById("generate-button")
let startOverBtn = document.getElementById("start-over-button")

const paintings = [{src: "Paintings/girl-with-pearl-earring-vermeer.jpg"},
    {src: "Paintings/madame-x-gautreau.jpg"},
    {src: "Paintings/madonna-fouquet.jpg"},
    {src: "Paintings/mona-lisa-davinci.jpg"},
    {src: "Paintings/portrait-of-adele-bloch-bauer-klimt.jpg"},
    {src: "Paintings/blank-canvas.jpg"}
]

let currentPainting = document.getElementById("displayed-painting")

// Generates a new image upon button click
function generateImg() {
    let currentIndex = paintings.findIndex(painting => painting.src === currentPainting.src);
    let randNum;

    do {
        randNum = Math.floor(Math.random() * paintings.length - 1);
    } while (randNum === currentIndex);

    currentPainting.src = paintings[randNum].src;
}

function startOver() {
    currentPainting.src = paintings[5].src;
}

generateBtn.addEventListener("click", generateImg)
startOverBtn.addEventListener("click", startOver)