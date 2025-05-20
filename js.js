// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "gallery/todo1.png",
        "gallery/todo2.png",
        "gallery/todo3.png",
        "gallery/todo4.png",
        "gallery/todo5.png",
        "gallery/todo6.png",
        "gallery/todo7.png",
        "gallery/todo8.png",
        "gallery/todo9.png",
        "gallery/todo10.png",
        "gallery/todo11.png",
        "gallery/todo12.png",

    ];

    let currentIndex = 0;
    const img = document.getElementById("galleryImage");
    const prev = document.getElementById("prevBtn");
    const next = document.getElementById("nextBtn");

    if (!img || !prev || !next) {
        console.error("Ein Element wurde nicht gefunden.");
        return;
    }

    function updateImage() {
        img.src = images[currentIndex];
    }

    prev.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });

    next.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });
});