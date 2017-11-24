function basketToggle() {

    const basketIcon = document.querySelector('.nav-icon-item-basket');
    const basketDropdown = document.querySelector('.basket-dropdown');

    function showBasket() {
        basketDropdown.classList.toggle('show-basket');
    }

    basketIcon.addEventListener('click', function() {
        showBasket();
    })
}

export default basketToggle();