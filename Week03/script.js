let generateBtn = document.getElementById("generate-button")
let startOverBtn = document.getElementById("start-over-button")

const paintings = [{src: "Paintings/girl-with-pearl-earring-vermeer.jpg"},
    {src: "Paintings/madame-x-gautreau.jpg"},
    {src: "Paintings/madonna-fouquet.jpg"},
    {src: "Paintings/mona-lisa-davinci.jpg"},
    {src: "Paintings/portrait-of-adele-bloch-bauer-klimt.jpg"},
    {src: "Paintings/blank-canvas.jpg"}
]

// GAMBOARD GRID
// Row 1
const r1b1 = [{src: "Paintings/girl-with-pearl-earring/girl-with-pearl-earring-vermeer_01.jpg"},
    {src: "Paintings/madame-x/madame-x-gautreau_01.jpg"},
    {src: "Paintings/madonna/madonna-fouquet_01.jpg"},
    {src: "Paintings/mona-lisa/mona-lisa-davinci_01.jpg"},
    {src: "Paintings/portrait-of-adele-bloch-bauer/portrait-of-adele-bloch-bauer-klimt_01.jpg"},
    {src: "Paintings/blank-canvas/blank-canvas_01.jpg"}
]

const r1b2 = [{src: "Paintings/girl-with-pearl-earring/girl-with-pearl-earring-vermeer_02.jpg"},
    {src: "Paintings/madame-x/madame-x-gautreau_02.jpg"},
    {src: "Paintings/madonna/madonna-fouquet_02.jpg"},
    {src: "Paintings/mona-lisa/mona-lisa-davinci_02.jpg"},
    {src: "Paintings/portrait-of-adele-bloch-bauer/portrait-of-adele-bloch-bauer-klimt_02.jpg"},
    {src: "Paintings/blank-canvas/blank-canvas_02.jpg"}
]

const r1b3 = [{src: "Paintings/girl-with-pearl-earring/girl-with-pearl-earring-vermeer_03.jpg"},
    {src: "Paintings/madame-x/madame-x-gautreau_03.jpg"},
    {src: "Paintings/madonna/madonna-fouquet_03.jpg"},
    {src: "Paintings/mona-lisa/mona-lisa-davinci_03.jpg"},
    {src: "Paintings/portrait-of-adele-bloch-bauer/portrait-of-adele-bloch-bauer-klimt_03.jpg"},
    {src: "Paintings/blank-canvas/blank-canvas_03.jpg"}
]

// Row 2
const r2b1 = [{src: "Paintings/girl-with-pearl-earring/girl-with-pearl-earring-vermeer_04.jpg"},
    {src: "Paintings/madame-x/madame-x-gautreau_04.jpg"},
    {src: "Paintings/madonna/madonna-fouquet_04.jpg"},
    {src: "Paintings/mona-lisa/mona-lisa-davinci_04.jpg"},
    {src: "Paintings/portrait-of-adele-bloch-bauer/portrait-of-adele-bloch-bauer-klimt_04.jpg"},
    {src: "Paintings/blank-canvas/blank-canvas_04.jpg"}
]

const r2b2 = [{src: "Paintings/girl-with-pearl-earring/girl-with-pearl-earring-vermeer_05.jpg"},
    {src: "Paintings/madame-x/madame-x-gautreau_05.jpg"},
    {src: "Paintings/madonna/madonna-fouquet_05.jpg"},
    {src: "Paintings/mona-lisa/mona-lisa-davinci_05.jpg"},
    {src: "Paintings/portrait-of-adele-bloch-bauer/portrait-of-adele-bloch-bauer-klimt_05.jpg"},
    {src: "Paintings/blank-canvas/blank-canvas_05.jpg"}
]

const r2b3 = [{src: "Paintings/girl-with-pearl-earring/girl-with-pearl-earring-vermeer_06.jpg"},
    {src: "Paintings/madame-x/madame-x-gautreau_06.jpg"},
    {src: "Paintings/madonna/madonna-fouquet_06.jpg"},
    {src: "Paintings/mona-lisa/mona-lisa-davinci_06.jpg"},
    {src: "Paintings/portrait-of-adele-bloch-bauer/portrait-of-adele-bloch-bauer-klimt_06.jpg"},
    {src: "Paintings/blank-canvas/blank-canvas_06.jpg"}
]

// Row 3
const r3b1 = [{src: "Paintings/girl-with-pearl-earring/girl-with-pearl-earring-vermeer_07.jpg"},
    {src: "Paintings/madame-x/madame-x-gautreau_07.jpg"},
    {src: "Paintings/madonna/madonna-fouquet_07.jpg"},
    {src: "Paintings/mona-lisa/mona-lisa-davinci_07.jpg"},
    {src: "Paintings/portrait-of-adele-bloch-bauer/portrait-of-adele-bloch-bauer-klimt_07.jpg"},
    {src: "Paintings/blank-canvas/blank-canvas_07.jpg"}
]

const r3b2 = [{src: "Paintings/girl-with-pearl-earring/girl-with-pearl-earring-vermeer_08.jpg"},
    {src: "Paintings/madame-x/madame-x-gautreau_08.jpg"},
    {src: "Paintings/madonna/madonna-fouquet_08.jpg"},
    {src: "Paintings/mona-lisa/mona-lisa-davinci_08.jpg"},
    {src: "Paintings/portrait-of-adele-bloch-bauer/portrait-of-adele-bloch-bauer-klimt_08.jpg"},
    {src: "Paintings/blank-canvas/blank-canvas_08.jpg"}
]

const r3b3 = [{src: "Paintings/girl-with-pearl-earring/girl-with-pearl-earring-vermeer_09.jpg"},
    {src: "Paintings/madame-x/madame-x-gautreau_09.jpg"},
    {src: "Paintings/madonna/madonna-fouquet_09.jpg"},
    {src: "Paintings/mona-lisa/mona-lisa-davinci_09.jpg"},
    {src: "Paintings/portrait-of-adele-bloch-bauer/portrait-of-adele-bloch-bauer-klimt_09.jpg"},
    {src: "Paintings/blank-canvas/blank-canvas_09.jpg"}
]

// GAMEBOARD VARIABLES
let currentPainting = document.getElementById("displayed-painting")

// Row 1
let r1b1Img = document.getElementById("row1box1")
let r1b2Img = document.getElementById("row1box2")
let r1b3Img = document.getElementById("row1box3")
// Row 2
let r2b1Img = document.getElementById("row2box1")
let r2b2Img = document.getElementById("row2box2")
let r2b3Img = document.getElementById("row2box3")
// Row 3
let r3b1Img = document.getElementById("row3box1")
let r3b2Img = document.getElementById("row3box2")
let r3b3Img = document.getElementById("row3box3")

const rows = [r1b1, r1b2, r1b3,
    r2b1, r2b2, r2b3,
    r3b1, r3b2, r3b3]
const rowsImg = [r1b1Img, r1b2Img, r1b3Img,
    r2b1Img, r2b2Img, r2b3Img,
    r3b1Img, r3b2Img, r3b3Img]
const rowsStr = ["row1box1", "row1box2", "row1box3",
    "row2box1", "row2box2", "row2box3",
    "row3box1", "row3box2", "row3box3"]

// Generates a new image upon button click
function generateImg() {
    let randNum = Math.floor(Math.random() * (paintings.length - 1))
    currentPainting.src = paintings[randNum].src
}

// Resets the gameboard to default state
function startOver() {
    currentPainting.src = paintings[5].src
    for (let i = 0; i < rows.length; i++) {
        rowsImg[i].src = rows[i][5].src
    }
}

function generateImgSlice(caller) {
    let randNum;

    switch (caller) {
        // Row 1
        case "row1box1":
            randNum = Math.floor(Math.random() * (r1b1.length - 1))
            r1b1Img.src = r1b1[randNum].src
            break
        case "row1box2":
            randNum = Math.floor(Math.random() * (r1b2.length - 1))
            r1b2Img.src = r1b2[randNum].src
            break
        case "row1box3":
            randNum = Math.floor(Math.random() * (r1b3.length - 1))
            r1b3Img.src = r1b3[randNum].src
            break
        // Row 2
        case "row2box1":
            randNum = Math.floor(Math.random() * (r2b1.length - 1))
            r2b1Img.src = r2b1[randNum].src
            break
        case "row2box2":
            randNum = Math.floor(Math.random() * (r2b2.length - 1))
            r2b2Img.src = r2b2[randNum].src
            break
        case "row2box3":
             randNum = Math.floor(Math.random() * (r2b3.length - 1))
            r2b3Img.src = r2b3[randNum].src
            break
        // Row 3
        case "row3box1":
            randNum = Math.floor(Math.random() * (r3b1.length - 1))
            r3b1Img.src = r3b1[randNum].src
            break
        case "row3box2":
            randNum = Math.floor(Math.random() * (r3b2.length - 1))
            r3b2Img.src = r3b2[randNum].src
            break
        case "row3box3":
            randNum = Math.floor(Math.random() * (r3b3.length - 1))
            r3b3Img.src = r3b3[randNum].src
            break
        default:
            console.error("Unknown caller")
    }
}

generateBtn.addEventListener("click", generateImg)
startOverBtn.addEventListener("click", startOver)

for (let i = 0; i < rowsImg.length; i++) {
    rowsImg[i].addEventListener("click", () => generateImgSlice(rowsStr[i]))
}