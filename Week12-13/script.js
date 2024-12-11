const processImgs = [
    {src: "process-images/process01.png"},
    {src: "process-images/process02.png"},
    {src: "process-images/process03.png"},
    {src: "process-images/process04.png"},
    {src: "process-images/process05.png"},
    {src: "process-images/process06.png"},
    {src: "process-images/process07.png"},
    {src: "process-images/process08.png"},
    {src: "process-images/process09.png"},
    {src: "process-images/process10.png"},
    {src: "process-images/process11.png"},
    {src: "process-images/process12.png"},
    {src: "process-images/process13.png"}
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
            processDescription.innerText = "I started off this project by exploring the BodyPose reference in ml5.js since this was going to be the foundation of my project."
            break
        case 2:
            processDescription.innerText = "I tested out the pre-built models in ml5.js and considered if I wanted to use the MoveNet or BlazePose model. It seemed like BlazePose would be most ideal for the concept I was trying to create since it included points for feet, which MoveNet did not."
            break
        case 3:
            processDescription.innerText = "From there, I imported the BlazePose keypoints model into my p5.js and started creating skeleton connections so that I could get that foundational body shape for figure drawing."
            break
        case 4:
            processDescription.innerText = "The BodyPose and BlazePose models did not have all the points I wanted. This project involved a bit of frankensteining other models together. After I established the body skeleton, I added the HandPose model and began creating the skeleton for both hands as well."
            break
        case 5:
            processDescription.innerText = "Then I began developing functionality to pinch to capture an image. I created an ellipse that tracked the distance between the user's index finger and thumb as an indicator of 1) which hand was controlling the trigger and 2) the actual threshold before the image would be captured."
            break
        case 6:
            processDescription.innerText = "I struggled a bit to get the pinch-to-capture functionality working so as a break, I started implementing the FaceMesh model."
            break
        case 7:
            processDescription.innerText = "I returned to working on the pinch-to-capture functionality. Once the distance between my index finger and thumb reached the desired threshold, the background would turn white and plot the skeleton and keypoints on the white background. This method didn't work out since it was still drawing the figure so I instead pivoted to have it pause the entire video with all of the body drawings if a boolean of imageCaptured was changed to true upon reaching the pinch threshold."
            break
        case 8:
            processDescription.innerText = "Similarly to the HandPose and BodyPose models, I also created a skeleton for the facial keypoints in the FaceMesh model."
            break
        case 9:
            processDescription.innerText = "From there, I refine the lines and keypoints size to be a bit more legible and overall show more detail."
            break
        case 10:
        case 11:
            processDescription.innerText = "Then I created a checkbox that would control whether or not to show the skeleton. I as an artist prefer to have the skeleton as a reference but I imagine that just being able to view the keypoints could be interesting as an intro figure drawing exercise and being able to connect the dots in your mind in order to practice drawing."
            break
        case 12:
            processDescription.innerText = "I added a white transparent overlay onto the video so that there would be more emphasis on the skeleton model while still allowing the video to show through as an additional reference. I also added a slider to change the distance threshold for the pinch-to-capture function in case you didn't want a visible pinch pose the pose you wanted to do as reference. "
            break
        case 13:
            processDescription.innerText = "I then added some additional UI which included a checkbox to toggle a grid on and off, a slider that would control the size of a grid, and a button that would allow you to capture a new image."
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
