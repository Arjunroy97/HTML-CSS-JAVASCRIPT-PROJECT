let navBer = document.getElementById('navBar');
window.onscroll = () => {
    if (window.scrollY >=100) {
        navBer.classList.add('nav-active');
    } else {
        navBer.classList.remove('nav-active');
    }
};