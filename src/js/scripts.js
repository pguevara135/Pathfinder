let menuMobileOpen = document.getElementById("open");
let menuMobileClose = document.getElementById("close");
let navItem = document.getElementById('nav-item');

window.addEventListener('resize', menuClose)
menuClose()

function menuShow() {
    if (menuMobileOpen.classList.contains('open')) {
        menuMobileOpen.classList.remove('open');
        menuMobileClose.classList.add("close");
        navItem.classList.remove("menu")
    }
}

function menuClose() {
    if (menuMobileClose.classList.contains('close')) {
        menuMobileOpen.classList.add('open');
        menuMobileClose.classList.remove('close');
        navItem.classList.add('menu');
    }
}