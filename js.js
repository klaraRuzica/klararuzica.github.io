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
        "todo1.png",
        "todo2.png",
        "todo3.png",
        "todo4.png",
        "todo5.png",
        "todo6.png",
        "todo7.png",
        "todo8.png",
        "todo9.png",
        "todo10.png",
        "todo11.png",
        "todo12.png",

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
