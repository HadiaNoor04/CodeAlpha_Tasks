let currentIndex = 0;

function getImages() {
    return document.querySelectorAll(".gallery img");
}

let galleryImages = getImages();

galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        document.getElementById("lightbox").style.display = "flex";
        showImage();
    });
});

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function changeImage(step) {
    let visibleImages = [...getImages()].filter(img => !img.classList.contains("hide"));

    currentIndex += step;

    if (currentIndex < 0) currentIndex = visibleImages.length - 1;
    if (currentIndex >= visibleImages.length) currentIndex = 0;

    document.getElementById("lightbox-img").src = visibleImages[currentIndex].src;
}

function showImage() {
    let visibleImages = [...getImages()].filter(img => !img.classList.contains("hide"));

    document.getElementById("lightbox-img").src = visibleImages[currentIndex].src;
}

function filterImages(category) {
    let images = getImages();

    images.forEach(img => {
        if (category === "all" || img.classList.contains(category)) {
            img.classList.remove("hide");
        } else {
            img.classList.add("hide");
        }
    });
    currentIndex = 0;
}