function menuToggle() {

    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu-container');
    
    function toggleHamburger() {
        hamburger.classList.toggle('is-active');
    }

    function toggleMobileMenu() {
        mobileMenu.classList.toggle('is-open');
    }

    hamburger.addEventListener('click', function() {
        toggleHamburger();
        toggleMobileMenu();
    })
}

export default menuToggle();


