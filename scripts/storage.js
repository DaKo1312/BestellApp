// #region save Basket to localStorage
function saveBasket() {
    localStorage.setItem('basket', JSON.stringify(basket));
}
// #endregion

// #region load Basket from localStorage
function loadBasket() {
    const storedBasket = localStorage.getItem('basket');
    if (storedBasket) {
        basket = JSON.parse(storedBasket);
    }
}
// #endregion