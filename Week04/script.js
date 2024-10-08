const processImgs = [
    {src: "images/screenshots/process01.png"},
    {src: "images/screenshots/process02.png"},
    {src: "images/screenshots/process03.png"},
    {src: "images/screenshots/process04.png"},
    {src: "images/screenshots/process05.png"},
    {src: "images/screenshots/process06.png"},
    {src: "images/screenshots/process07.png"},
    {src: "images/screenshots/process08.png"},
    {src: "images/screenshots/process09.png"},
    {src: "images/screenshots/process10.png"},
    {src: "images/screenshots/process11.png"},
    {src: "images/screenshots/process12.png"},
    {src: "images/screenshots/process13.png"},
    {src: "images/screenshots/process14.png"},
    {src: "images/screenshots/process15.png"},
    {src: "images/screenshots/process16.png"},
    {src: "images/screenshots/process17.png"},
    {src: "images/screenshots/process18.png"},
    {src: "images/screenshots/process19.png"},
    {src: "images/screenshots/process20.png"},
    {src: "images/screenshots/process21.png"}
]

let processImg = document.getElementById("process-img")
let processLeft = document.querySelector(".process-arrow-left")
let processRight = document.querySelector(".process-arrow-right")

let processProgress = document.getElementById("process-progress")
let processDescription = document.getElementById("process-description")

let processIndex = 0

// function changeProcessDescription(num) {
//     console.log("I'm here")
//     switch (displayIndex) {
//         case 1:
//             processDescription.innerText = "Hello"
//             break
//         default:
//             processDescription.innerText = "Goodbye"
//     }
// }

function changeProcessImg(_image) {
    let processSrc = _image.src
    processImg.src = processSrc
    processIndex = processImgs.indexOf(_image)

    let displayIndex = processIndex + 1
    processProgress.innerHTML = displayIndex + " of " + processImgs.length
    switch (displayIndex) {
        case 1:
            processDescription.innerText = "I actually start the design process by being led astray by a tutorial. Here, I start with a circle plane."
            break
        case 2:
            processDescription.innerText = "I was a bit confused and didn't recall much of what we went over in class. I ended up playing the lecture side-by-side as I designed and opted to swap to a cylinder to start. I realized using a 2D shape would involve me having to close a lot of the shapes later on."
            break
        case 3:
            processDescription.innerText = "At this point, I'm starting to get into the groove of things and getting used to the shortcuts. I'm mostly finished with my first object!"
            break
        case 4:
            processDescription.innerText = "Because I was doing a tablescape, I wanted to create some smaller details like plates to hold other objects that I was creating. I returned to the original tutorial I was referencing since that showed me how to model objects based on planes. I found that it was helpful to model objects from their default add state and then sizing them down later on."
            break
        case 5:
            processDescription.innerText = "With the plate completed, I started working on some donuts for my tea party. It made sense to me to tackle the donut tutorial that everyone does for Blender and I wanted to integrate it into my overall concept in some way."
            break
        case 6:
        case 7:
        case 8:
            processDescription.innerText = "I started to move onto my second main object: the tea set. I went through several iterations of creating the teacup because I wasn't satisfied with the initial shapes I was creating. This allowed me to mess around a bit more with the extrude and scale tools."
            break
        case 9:
        case 10:
            processDescription.innerText = "The handle of the teacup (and later on the teapot) was the part I struggled with the most. I experimented with the loop cut and extruding outwards from it but that method didn't leave me with a hollow cup. Instead, I ended up creating a 2D circle that I rotated and extruded from in order to create the handle. It took a few tries to get it to look proportionate."
            break
        case 11:
            processDescription.innerText = "My tablescape was finally coming together. At this point, I had created three objects but I felt that I still wanted to continue getting used to the workflow in Blender by creating additional objects."
            break
        case 12:
        case 13:
            processDescription.innerText = "With the chair, I was experimenting with adding on mesh shapes onto existing ones. With the table, I could more or less model it with one to two cylinders at most using the extrude tool. As for the chair, I wanted to add rounded legs to a square foundation. This allowed me to get used to object alignment and moving objects along certain axes."
            break
        case 14:
        case 15:
            processDescription.innerText = "The process for modeling the teapot goes by a lot faster after figuring out a good strategy for the handle and spout while modeling the teacup. I was still navigating how to use the rotate and scale tool to make every angle of the handle and spout proportionate."
            break
        case 16:
        case 17:
            processDescription.innerText = "At this point, I had created all the objects I wanted for my tablescape. I wanted my model to feel more complete so I started duplicating and rotating objects to make the scene seem more natural. I also gave the imaginary person having tea a friend to dine with."
            break
        case 18:
            processDescription.innerText = "I start flushing out the scene a bit more by adding planes to ground the space. I thought it would be pretty fun and simple enough to create a window on the y-plane."
            break
        case 19:
            processDescription.innerText = "After grounding my space, I start creating materials for my objects. This involved a lot of toggling between render mode and the various viewports in order to create the overall look that I wanted."
            break
        case 20:
        case 21:
            processDescription.innerText = "After finishing up with the creation of my materials, I started experimenting with camera and lighting angles in order to create my final renders."
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
    {src: "images/renders/render01.png"},
    {src: "images/renders/render02.png"},
    {src: "images/renders/render03.png"}
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