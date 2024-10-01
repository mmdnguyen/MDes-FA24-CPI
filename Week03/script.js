let generateBtn = document.getElementById("generate-button")
let startOverBtn = document.getElementById("start-over-button")
let submitBtn = document.getElementById("submit-button")

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
    currentPainting.src = paintings[paintings.length - 1].src
    for (let i = 0; i < rows.length; i++) {
        rowsImg[i].src = rows[i][r1b1.length - 1].src
    }
    let paintingInfo = document.getElementById("painting-info")
    paintingInfo.style.visibility = "hidden"
}

function submit() {
    let mainImgSrc = currentPainting.src + ""
    let currentIndex
    let counter = 0

    let gameEnd = document.getElementById("game-end")
    let gameEndSub = document.getElementById("game-end-subhead")
    let gameEndMsg = document.getElementById("game-end-message")
    let paintingInfo = document.getElementById("painting-info")

    for (let i = 0; i < paintings.length; i++) {
        if (mainImgSrc.includes(paintings[i].src)) {
            currentIndex = i
        }
    }

    switch(currentIndex) {
        case 0:
            for (let i = 0; i < rowsImg.length; i++) {
                if (rowsImg[i].src.includes("vermeer")) {
                    counter++
                }
            }
            if (counter === 9) {
                paintingInfo.style.visibility = "visible"
                gameEnd.innerText = "Congratulations!"
                gameEndSub.innerHTML = "<h2>You've discovered <em>Girl with a Pearl Earring</em> by Johannes Vermeer</h2> <style>h2 {font-size:24px}</style>"
                gameEndMsg.innerHTML = "<p>The girl’s features may have been inspired by a live model, but her identity is unknown. Many subjects have been suggested, including the artist’s eldest daughter, but none of these proposals has been widely embraced. The painting belongs to a distinctly Dutch subcategory of portraiture known as the <em>tronie. Tronies</em> depict idealized faces or exaggerated expressions and often feature exotic trappings, like the turban and enormous earring worn by the girl.</p> <p><em>Source: </em><a href='https://www.frick.org/exhibitions/mauritshuis/670'>The Frick Collection</a></p>"
            }
            else {
                paintingInfo.style.visibility = "visible"
                gameEnd.innerText = "Sorry!"
                gameEndSub.innerHTML = "<h2>Something seems to be missing here...</h2> <style>h2 {font-size:24px}</style>"
                gameEndMsg.innerHTML = "<p>To learn more about the painting, correctly match the pieces to the generated image.<p>"
            }
            break
        case 1:
            for (let i = 0; i < rowsImg.length; i++) {
                if (rowsImg[i].src.includes("gautreau")) {
                    counter++
                }
            }
            if (counter === 9) {
                paintingInfo.style.visibility = "visible"
                gameEnd.innerText = "Congratulations!"
                gameEndSub.innerHTML = "<h2>You've discovered <em>Portrait of Madame X</em> by John Singer Sargent</h2> <style>h2 {font-size:24px}</style>"
                gameEndMsg.innerHTML = "<p>Madame Pierre Gautreau (the Louisiana-born Virginie Amélie Avegno; 1859–1915) was known in Paris for her artful appearance. Sargent hoped to enhance his reputation by painting and exhibiting her portrait. Working without a commission but with his sitter’s complicity, he emphasized her daring personal style, showing the right strap of her gown slipping from her shoulder. At the Salon of 1884, the portrait received more ridicule than praise. Sargent repainted the shoulder strap and kept the work for over thirty years. When, eventually, he sold it to the Metropolitan, he commented, “I suppose it is the best thing I have done,” but asked that the Museum disguise the sitter’s name.</p> <p><em>Source: </em><a href='https://www.metmuseum.org/art/collection/search/12127'>The Metropolitan Museum of Art</a></p>"
            }
            else {
                paintingInfo.style.visibility = "visible"
                gameEnd.innerText = "Sorry!"
                gameEndSub.innerHTML = "<h2>Something seems to be missing here...</h2> <style>h2 {font-size:24px}</style>"
                gameEndMsg.innerHTML = "<p>To learn more about the painting, correctly match the pieces to the generated image.<p>"
            }
            break
        case 2:
            for (let i = 0; i < rowsImg.length; i++) {
                if (rowsImg[i].src.includes("fouquet")) {
                    counter++
                }
            }
            if (counter === 9) {
                paintingInfo.style.visibility = "visible"
                gameEnd.innerText = "Congratulations!"
                gameEndSub.innerHTML = "<h2>You've discovered <em>The Virgin and Child with Angels</em> by Jean Fouquet</h2> <style>h2 {font-size:24px}</style>"
                gameEndMsg.innerHTML = "<p>A masterpiece of French painting, <em>The Virgin and Child with Angels</em> reveals the original way that Fouquet gave visual form to the various influences that helped define his style. While the iconography, in particular the monochrome red and blue angels, derives from the northern European tradition, the way in which the work was devised and painted reveals the artist’s knowledge of the art of Flanders and <em>Quattrocento</em> Italy. The manner of conveying the different textures and effects of light, such as the reflection of the window on the polished surface of the two balls of the throne, recalls Jan van Eyck. In contrast, the geometrical construction of space and the artist’s interest in pure forms, evident in the Virgin’s oval head and her breasts, which are drawn with a compass, bring to mind the work of Paolo Uccello and Piero della Francesca.</p> <p><em>Source: </em><a href='https://www.museodelprado.es/en/whats-on/exhibition/the-invited-work-the-virgin-and-child-with-angels/d09b2664-74a8-4ad8-a7d8-f84b9d717552#:~:text=The%20Virgin%20and%20Child%20with%20Angels%20Jean%20Fouquet%20Oil%20on,frontally%20before%20an%20elaborate%20throne.'>Museo del Prado</a></p>"
            }
            else {
                paintingInfo.style.visibility = "visible"
                gameEnd.innerText = "Sorry!"
                gameEndSub.innerHTML = "<h2>Something seems to be missing here...</h2> <style>h2 {font-size:24px}</style>"
                gameEndMsg.innerHTML = "<p>To learn more about the painting, correctly match the pieces to the generated image.<p>"
            }
            break
        case 3:
            for (let i = 0; i < rowsImg.length; i++) {
                if (rowsImg[i].src.includes("davinci")) {
                    counter++
                }
            }
            if (counter === 9) {
                paintingInfo.style.visibility = "visible"
                gameEnd.innerText = "Congratulations!"
                gameEndSub.innerHTML = "<h2>You've discovered <em>Mona Lisa</em> by Leonardo da Vinci</h2> <style>h2 {font-size:24px}</style>"
                gameEndMsg.innerHTML = "<p><em>Mona Lisa</em>, [an] oil painting on a poplar wood panel by Leonardo da Vinci, [is] probably the world’s most famous painting. It was painted sometime between 1503 and 1519, when Leonardo was living in Florence, and it now hangs in the Louvre Museum, Paris, where it remained an object of pilgrimage in the 21st century. The sitter’s mysterious smile and her unproven identity have made the painting a source of ongoing investigation and fascination.</p> <p><em>Source: </em><a href='https://www.britannica.com/topic/Mona-Lisa-painting'>Britannica</a></p>"
            }
            else {
                paintingInfo.style.visibility = "visible"
                gameEnd.innerText = "Sorry!"
                gameEndSub.innerHTML = "<h2>Something seems to be missing here...</h2> <style>h2 {font-size:24px}</style>"
                gameEndMsg.innerHTML = "<p>To learn more about the painting, correctly match the pieces to the generated image.<p>"
            }
        break
        case 4:
            for (let i = 0; i < rowsImg.length; i++) {
                if (rowsImg[i].src.includes("klimt")) {
                    counter++
                }
            }
            if (counter === 9) {
                paintingInfo.style.visibility = "visible"
                gameEnd.innerText = "Congratulations!"
                gameEndSub.innerHTML = "<h2>You've discovered <em>Portrait of Adele Bloch-Bauer I</em> by Gustav Klimt</h2> <style>h2 {font-size:24px}</style>"
                gameEndMsg.innerHTML = "<p>Visitors from around the globe flock to Neue Galerie New York to see a very special lady, Gustav Klimt's <em>Portrait of Adele Bloch-Bauer I</em> (1907), popularly referred to as the “Woman in Gold.” Few paintings have captured the public’s imagination so thoroughly. Klimt’s depiction of Adele Bloch-Bauer not only rendered her irresistible beauty and sensuality; its intricate ornamentation and exotic motifs heralded the dawn of modernity and a culture intent on radically forging a new identity.</p> <p><em>Source: </em><a href='https://www.neuegalerie.org/womaningold'>Neue Galerie</a></p>"
            }
            else {
                paintingInfo.style.visibility = "visible"
                gameEnd.innerText = "Sorry!"
                gameEndSub.innerHTML = "<h2>Something seems to be missing here...</h2> <style>h2 {font-size:24px}</style>"
                gameEndMsg.innerHTML = "<p>To learn more about the painting, correctly match the pieces to the generated image.<p>"
            }
            break
        default:
            paintingInfo.style.visibility = "visible"
            gameEnd.innerText = "Sorry!"
            gameEndSub.innerHTML = "<h2>Something seems to be missing here...</h2> <style>h2 {font-size:24px}</style>"
            gameEndMsg.innerHTML = "<p>To learn more about the painting, correctly match the pieces to the generated image.<p>"
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
submitBtn.addEventListener("click", submit)

for (let i = 0; i < rowsImg.length; i++) {
    rowsImg[i].addEventListener("click", () => generateImgSlice(rowsStr[i]))
}