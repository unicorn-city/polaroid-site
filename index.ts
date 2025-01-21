const cameraEl = document.getElementById("polaroid-camera")!
const cameraImgEl = document.getElementById("polaroid-img")!
const polaroidPictureWrapperEl = document.getElementById("polaroid-picture-wrapper")!
const polaroidPictureEl = document.getElementById("polaroid-picture")!
const cameraImgAspect = cameraImgEl.clientWidth / cameraImgEl.clientHeight
const cameraBtn = document.createElement("button")
const flashOverlay = document.getElementById("flash-overlay")!

const audioEl = document.getElementById('camera-sound')! as HTMLAudioElement

cameraBtn.className = "cameraBtn"
document.body.appendChild(cameraBtn)

const targetCameraWidth = 500

cameraEl.style.width = targetCameraWidth + 'px'
cameraEl.style.height = (targetCameraWidth / cameraImgAspect) + 'px'
cameraImgEl.remove()

const setSizes = () => {
    const cameraBounds = cameraEl.getBoundingClientRect()
    polaroidPictureWrapperEl.style.left = cameraBounds.left + (targetCameraWidth * 0.11) + 'px'
    polaroidPictureWrapperEl.style.top = cameraBounds.top + (targetCameraWidth * 0.74) + 'px'

    polaroidPictureWrapperEl.style.width = (targetCameraWidth * 0.81) + 'px'
    polaroidPictureWrapperEl.style.height = ((targetCameraWidth * 0.81) * 1.2) + 'px'

    polaroidPictureEl.style.height = polaroidPictureWrapperEl.style.height
    polaroidPictureEl.style.width = polaroidPictureWrapperEl.style.width

    cameraBtn.style.width = (targetCameraWidth * 0.072) + 'px'
    cameraBtn.style.height = (targetCameraWidth * 0.072) + 'px'
    cameraBtn.style.top = cameraBounds.top + (targetCameraWidth * 0.287) + 'px'
    cameraBtn.style.left = cameraBounds.left + (targetCameraWidth * 0.158) + 'px'

    cameraEl.style.opacity = "1"
    cameraBtn.style.opacity = "1"
    polaroidPictureEl.style.opacity = "1"
}

setSizes()

window.addEventListener("resize", () => {
    setSizes()
})

let active = false

const snap = () => {
    if (active) return
    console.log("Snap!")

    active = true
    polaroidPictureEl.classList.remove("open")
    setTimeout(() => {
        active = false
    }, 8000)

    audioEl.play();

    setTimeout(() => {
        flashOverlay.classList.add("active")
    }, 100);
    setTimeout(() => {
        flashOverlay.classList.remove("active")
    }, 500);

    setTimeout(() => {
        polaroidPictureEl.classList.add("open")
    }, 1800);
}

cameraBtn.addEventListener("click", () => {
    snap()
})