
window.onload = function() {
    document.body.style.opacity = 1;
};

window.addEventListener("scroll", function () {
    let sections = document.querySelectorAll("section");

    sections.forEach(section => {
        let position = section.getBoundingClientRect().top;
        let screen = window.innerHeight;

        if (position < screen - 100) {
            section.classList.add("show");
        }
    });
});