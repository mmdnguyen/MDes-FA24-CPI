// let gt1 = document.getElementById("gallery-thumb01")
// let gt2 = document.getElementById("gallery-thumb02")
// let gt3 = document.getElementById("gallery-thumb03")
// let gt4 = document.getElementById("gallery-thumb04")
let thumbImgs = document.querySelectorAll(".gallery-thumb > img")
let rightArrow = document.querySelector(".showcase-arrow-right")
let leftArrow = document.querySelector(".showcase-arrow-left")

let currentImgIndex = 0

let scImg = document.getElementById("showcase-img")

function changeImg(_image) {
    // console.log(event)
    // event target refers to img being clicked on
    let thumbSrc = _image.src
    scImg.src = thumbSrc

    thumbImgs.forEach(function(elem) {
        elem.parentElement.classList.remove("current-thumb")
    })

    _image.parentElement.classList.add("current-thumb")

    currentImgIndex = Array.from(thumbImgs).indexOf(_image)
}

for (let i = 0; i < thumbImgs.length; i++) {
    thumbImgs[i].addEventListener("click", function(event){
        changeImg(event.target)
    })
}

rightArrow.addEventListener("click", function() {
    currentImgIndex++
    if (currentImgIndex >= thumbImgs.length) {
        currentImgIndex = 0
    }
    changeImg(thumbImgs[currentImgIndex])
})

leftArrow.addEventListener("click", function() {
    currentImgIndex--
    if (currentImgIndex < 0) {
        currentImgIndex = thumbImgs.length - 1
    }
    changeImg(thumbImgs[currentImgIndex])
})

// gt1.addEventListener("click", changeImg)
// gt2.addEventListener("click", changeImg)
// gt3.addEventListener("click", changeImg)
// gt4.addEventListener("click", changeImg)

