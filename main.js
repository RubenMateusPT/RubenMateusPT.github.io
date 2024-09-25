let baseImage = document.getElementById("baseImage");
let carouselImgs = document.querySelectorAll(".project .carousel img,iframe,video")

window.onload = ResizeCarouselImages;
window.onresize = ResizeCarouselImages;

function ResizeCarouselImages(e){
    carouselImgs.forEach(ci => {
        ci.width = baseImage.width;
        ci.height = baseImage.height;
    })
}