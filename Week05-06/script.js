const sketchImgs = [
    {src: "sketches/01-dashboard-evolution.jpg"},
    {src: "sketches/02-2024-subaru-crosstrek-dash.jpg"},
    {src: "sketches/03-sketches.jpg"},
    {src: "sketches/04-initial-sketch.jpg"},
    {src: "sketches/05-secondary sketch.jpg"},
    {src: "sketches/06-secondary-sketch-functions.jpg"},
    {src: "sketches/07-hi-fi.jpg"}
]

let sketchImg = document.getElementById("sketch-img")
let sketchLeft = document.querySelector(".sketch-arrow-left")
let sketchRight = document.querySelector(".sketch-arrow-right")

let sketchProgress = document.getElementById("sketch-progress")
let conceptDescription = document.getElementById("concept-description")

let sketchIndex = 0

function changeSketchImg(_image) {
    let sketchSrc = _image.src
    sketchImg.src = sketchSrc
    sketchIndex = sketchImgs.indexOf(_image)
    let displayIndex = sketchIndex + 1
    sketchProgress.innerText = displayIndex + " of " + sketchImgs.length
    
    switch (displayIndex) {
        case 1:
            conceptDescription.innerText = "Evolution of Subaru Crosstrek dashboards from 2016 - 2024"
            break
        case 2:
            conceptDescription.innerText = "Current 2024 Subaru Crosstrek site structure screens"
            break
        case 3:
            conceptDescription.innerText = "Initial sketches and thoughts for dashboard design"
            break
        case 4:
            conceptDescription.innerText = "Low-fidelity design of initial sketches"
            break
        case 5:
            conceptDescription.innerText = "Mid-fidelity design of initial sketches"
        break
        case 6:
            conceptDescription.innerText = "Touchscreen functions and differentiations between digital and tactile experiences"
        break
        case 7:
            conceptDescription.innerText = "High-fidelity design of initial sketches"
        break
        default:
            conceptDescription.innerText = ""
    }
}

sketchRight.addEventListener("click", function() {
    sketchIndex++
    if (sketchIndex >= sketchImgs.length) {
        sketchIndex = 0
    }
    changeSketchImg(sketchImgs[sketchIndex])
})

sketchLeft.addEventListener("click", function() {
    sketchIndex--
    if (sketchIndex < 0) {
        sketchIndex = sketchImgs.length - 1
    }
    changeSketchImg(sketchImgs[sketchIndex])
})

const processImgs = [
    {src: "process-photos/process01.png"},
    {src: "process-photos/process02.png"},
    {src: "process-photos/process03.png"},
    {src: "process-photos/process04.png"},
    {src: "process-photos/process05.png"},
    {src: "process-photos/process06.png"},
    {src: "process-photos/process07.png"},
    {src: "process-photos/process08.png"},
    {src: "process-photos/process09.png"},
    {src: "process-photos/process10.png"},
    {src: "process-photos/process11.png"},
    {src: "process-photos/process12.png"},
    {src: "process-photos/process13.png"},
    {src: "process-photos/process14.png"},
    {src: "process-photos/process15.png"},
    {src: "process-photos/process16.png"},
    {src: "process-photos/process17.png"},
    {src: "process-photos/process18.png"},
    {src: "process-photos/process19.png"},
    {src: "process-photos/process20.png"},
    {src: "process-photos/process21.png"},
    {src: "process-photos/process22.png"},
    {src: "process-photos/process23.png"},
    {src: "process-photos/process24.png"},
    {src: "process-photos/process25.png"},
    {src: "process-photos/process26.png"},
    {src: "process-photos/process27.png"}
]

let processImg = document.getElementById("process-img")
let processLeft = document.querySelector(".process-arrow-left")
let processRight = document.querySelector(".process-arrow-right")

let processProgress = document.getElementById("process-progress")
let processDescription = document.getElementById("process-description")

let processIndex = 0

function changeProcessImg(_image) {
    let processSrc = _image.src
    processImg.src = processSrc
    processIndex = processImgs.indexOf(_image)

    let displayIndex = processIndex + 1
    processProgress.innerHTML = displayIndex + " of " + processImgs.length
    
    switch (displayIndex) {
        case 1:
        case 2:
        case 3:
            processDescription.innerText = "I began the process by making the foundation of my dashboard and creating the wheel. I spent some time trying to envision the ways in which my dashboard might extend downwards and the size at which I wanted my wheel to be. I referenced images of existing Subaru dashboards in order to get a better idea of its anatomy."
            break
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            processDescription.innerText = "Then I started designing the screen. I mostly kept this the same as what I sketched out. Here, I began working and experimenting with duplicate objects. I created the various knobs, dials, and buttons that I was pairing with the touchscreen design in order to implement a more tactile aspect to the overall user experience."
            break
        case 11:
        case 12:
            processDescription.innerText = "I revisited the wheel design in order to add more detail and create a more realistic rendering."
            break
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
            processDescription.innerText = "I also decided to add where the A/C features would go. This allowed me to explore more of the loop cut tool and how to work with extrusions."
            break
        case 18:
            processDescription.innerText = "Up until this point, I had been building my interface straight-on to avoid having to continuously rotate and align added elements. I rotated my entire interface and started visualizing how it might look in an actual space by adjusting the angled planes to meet the ground."
            break
        case 19:
            processDescription.innerText = "I added in the final screen I designed."
            break
        case 20:
        case 21:
            processDescription.innerText = "Then, I added an HDRI background and adjusted the angle of my interface to match the view I wanted within the world."
            break
        case 22:
        case 23:
        case 24:
            processDescription.innerText = "I began adding in materials and textures, making sure to check that I liked how each material was presented at every angle. At this point, I also began adding icons onto my buttons."
            break
        case 25:
            processDescription.innerText = "Then I started to play around with the lighting and camera angles in order to create my final renders and ensure that everything looked the way I wanted it to. I also added in planes around my interface to place it in a space and make sure it wasn't just a floating car dashboard."
            break
        case 26:
        case 27:
            processDescription.innerText = "Finishing touches! Upon further review, I had missed a couple of things such as a button to start the car and the text to denote the volume button. I started cleaning up and making sure that everything was in the right place."
            break
        default:
            processDescription.innerText = ""
    }
}

processRight.addEventListener("click", function() {
    processIndex++
    if (processIndex >= processImgs.length) {
        processIndex = 0
    }
    changeProcessImg(processImgs[processIndex])
})

processLeft.addEventListener("click", function() {
    processIndex--
    if (processIndex < 0) {
        processIndex = processImgs.length - 1
    }
    changeProcessImg(processImgs[processIndex])
})

const renderImgs = [
    {src: "renders/render01.png"},
    {src: "renders/render02.png"},
    {src: "renders/render03.png"},
    {src: "renders/render04.png"},
    {src: "renders/render05.png"}
]

let renderImg = document.getElementById("render-img")
let renderLeft = document.querySelector(".render-arrow-left")
let renderRight = document.querySelector(".render-arrow-right")

let renderProgress = document.getElementById("render-progress")
let renderIndex = 0

function changeRenderImg(_image) {
    let renderSrc = _image.src
    renderImg.src = renderSrc
    renderIndex = renderImgs.indexOf(_image)
    let displayIndex = renderIndex + 1
    renderProgress.innerText = displayIndex + " of " + renderImgs.length
}

renderRight.addEventListener("click", function() {
    renderIndex++
    if (renderIndex >= renderImgs.length) {
        renderIndex = 0
    }
    changeRenderImg(renderImgs[renderIndex])
})

renderLeft.addEventListener("click", function() {
    renderIndex--
    if (renderIndex < 0) {
        renderIndex = renderImgs.length - 1
    }
    changeRenderImg(renderImgs[renderIndex])
})