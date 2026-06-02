function init() {
    renderMyDishesBs();
    renderMyDishesP();
    renderMyDishesS();
    loadBasket();
    renderBasket();
}

function formatPrice(price) {
    return price.toLocaleString("de-DE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }) + "€";
}

// #region render Burger
function renderMyDishesBs() {
    const contentRef = document.getElementById('dishes_bs');
    contentRef.innerHTML = "";
    for (let index = 0; index < myDishesBs.length; index++) {
        contentRef.innerHTML += getDishTemplate(myDishesBs[index]);
    }
}
// #endregion

// #region render Pizza
function renderMyDishesP() {
    const contentRef = document.getElementById('dishes_p');
    contentRef.innerHTML = "";
    for (let index = 0; index < myDishesP.length; index++) {
        contentRef.innerHTML += getDishTemplate(myDishesP[index]);
    }
}
// #endregion

// #region render Salad
function renderMyDishesS() {
    const contentRef = document.getElementById('dishes_s');
    contentRef.innerHTML = "";
    for (let index = 0; index < myDishesS.length; index++) {
        contentRef.innerHTML += getDishTemplate(myDishesS[index]);
    }
}
// #endregion

// #region add Dishes to Basket
function addToBasket(dish) {
    const sameDish = basket.find(item => item.name === dish.name);
    if (sameDish) {
        sameDish.amount++;
    } else {
        basket.push({
            ...dish,
            amount: 1
        });
    }
    saveBasket();
    renderBasket();
}
// #endregion

// #region render Basket
function renderBasket() {
    let positionScroll = document.getElementById('order_content');
    let scrollPosition = 0;
    if (positionScroll) {
        scrollPosition = positionScroll.scrollTop;
    };
    const basketRef = document.getElementById('basket_content');
    basketRef.innerHTML = getBasketWrapperTemplate();

    const basketItemsRef = document.getElementById('order_content');
    for (let index = 0; index < basket.length; index++) {
    basketItemsRef.innerHTML += getBasketTemplate(index);
}
    basketItemsRef.scrollTop = scrollPosition;
    basketSummary();
    updateBasketBadge();
}
// #endregion

// #region remove Order from Basket
function removeFromBasket(index) {
    basket.splice(index, 1);

    saveBasket();
    renderBasket();
}
// #endregion

// #region calculate Basket
function calculateBasketTotal() {
    let total = 0;
    for (let index = 0; index < basket.length; index++) {
        total += basket[index].price * basket[index].amount;
    }

    return total;
}
// #endregion

// #region zugabe zum Menü
function increaseAmount(index) {
    basket[index].amount++;
    
    saveBasket();
    renderBasket();
}
// #endregion

// #region entnahme des Menüs
function decreaseAmount(index) {
    if (basket[index].amount > 1) {
        basket[index].amount--;
    } else {
        basket.splice(index, 1);
    }

    saveBasket();
    renderBasket();
}
// #endregion

// #region basket summary
function basketSummary() {
    const subtotal = calculateBasketTotal();
    const deliveryFee = basket.length > 0 ? 4.99 : 0;
    const total = subtotal + deliveryFee;

    document.getElementById('subtotal').innerHTML =
        formatPrice(subtotal);
    document.getElementById('delivery_fee').innerHTML =
        formatPrice(deliveryFee);
    document.getElementById('total').innerHTML =
        formatPrice(total);
    document.getElementById('buy_total').innerHTML =
        formatPrice(total);

    const buyButton = document.getElementById('buy_button');
    if (basket.length === 0) {
        buyButton.disabled = true;
    } else {
        buyButton.disabled = false;
    }
}
// #endregion

// #region buyNow Button
function buyNow() {
    const overlay = document.getElementById('order_overlay');
    overlay.classList.add('overlay_active');
    document.body.style.overflow = "hidden";

    basket = [];

    saveBasket();
    renderBasket();
}
// #endregion

// #region close Overlay
function closeOverlay() {
    document.getElementById('order_overlay')
    .classList.remove('overlay_active');
    document.body.style.overflow = "auto";
}
// #endregion

function toggleCart() {
    document.getElementById('basket_container')
    .classList.toggle('basket_none');
}

function closeCart() {
    document.getElementById('basket_container')
    .classList.toggle('basket_container');
}

function updateBasketBadge() {
    let totalAmount = 0;
    for (let index = 0; index < basket.length; index++) {
        totalAmount += basket[index].amount;
    }
    document.getElementById('basket_badge').innerHTML = totalAmount;
    const basketIcon = document.getElementById('mobile_basket_icon');
    if (totalAmount > 0) {
        basketIcon.src ='./assets/icons/shopping-cart-orange.png';
    } else {
        basketIcon.src ='./assets/icons/shopping-cart-icon-white.png';
}
}