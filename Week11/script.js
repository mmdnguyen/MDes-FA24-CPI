const processImgs = [
    {src: "process-images/process01.png"},
    {src: "process-images/process02.png"},
    {src: "process-images/process03.png"},
    {src: "process-images/process04.png"},
    {src: "process-images/process05.png"},
    {src: "process-images/process06.png"},
    {src: "process-images/process07.png"}
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
            processDescription.innerText = "I started by creating a cityscape as a static element in my sketch. I used functions to create each building and then added helper functions to create rows of windows and arches. I allowed each function to take in parameters for size and color so that I could create a sense of depth in the foreground, midground, and background."
            break
        case 2:
            processDescription.innerText = "I changed the hues of the building to match a night scene and began adding elements to the sky. This included stars that glimmered at random brightnesses and sizes and a shooting star. I covered up the previously drawn stars by creating a partially transparent rectangle on top of each shape drawn so that it would have the appearance of fading out."
            break
        case 3:
            processDescription.innerText = "Then I tried to add a waxing and waning moon. Since I struggled with the math behind creating a gradually shifting arc, I looked up references and examples of using arc() and how it might change when you change each of its parameters. I also looked at inspiration on OpenProcessing to understand other people's processes on how to create similar movement."
            break
        case 4:
            processDescription.innerText = "At this point, I wanted to keep exploring the concepts of time & oscillation so I created a daytime version of my sketch. I made an array of hues so that each time of day would have its own distinctive color of buildings. Then I created the sun with the intent to have rays that rotated around the core. I initially had the rays rotating consistently with the orange rays rotating counterclockwise and with yellow rays rotating clockwise."
            break
        case 5:
            processDescription.innerText = "However, I wanted to see how using sine and cosine might change the way the rays moved. I created more layers of rays in order to explore this, with some layers rotating in a sine function and others in a cosine function. I like that this made the rays appear more organic in their rotation, like how you might envision a solar flare might work."
            break
        case 6:
            processDescription.innerText = "I decided to add an evening/sunset version for fun. With this version, I created some simple movements of ellipses rotating inside of each other. I feel like the sun at sunset has a similar vibe as its setting. I also added another hue to change the look and feel of the buildings at this time of day."
            break
        case 7:
            processDescription.innerText = "I ended up swapping the colors of the sun to be opposite of what it originally was. I was really happy with all the iterations I came up with while working on this assignment and attempted to animate it in a way where the versions would fade into each other after a certain amount of time had elapsed. Then, I resized the canvas to be cropped in a bit closer. I was really glad to see that my calcuations to ensure that the sun and moon would always occupy the same area as each other worked out after resizing."
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