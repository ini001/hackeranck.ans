function eventListeners() {
    const ui = new UI()

    //navbar
    document.querySelector('.burger').addEventListener('click', function () {
        ui.navSlide();
        const links = document.querySelectorAll('.nav-links li')
        for (let i = 0; i < links.length; i++) {
            ui.navLinks(links[i], i);
        }
    });
}
//constructor function
function UI() {

}

//navbar
UI.prototype.navSlide = function () {
    document.querySelector('.nav-links').classList.toggle('nav-active');
}
//navlinks
UI.prototype.navLinks = function (link, index) {
    console.log(index);
    if (link.style.animation) {
        link.style.animation = '';
    } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0}s`;
    }
}

eventListeners();
