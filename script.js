function formatPrice(price) {
    return price.toLocaleString("de-DE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }) + "€";
}

// render Burger
function renderMyDishesBs() {
    const contentRef = document.getElementById('dishes_bs');
    contentRef.innerHTML = "";
    for (let index = 0; index < myDishesBs.length; index++) {
        contentRef.innerHTML += getDishTemplate(myDishesBs[index]);
    }
}

// render Pizza
function renderMyDishesP() {
    const contentRef = document.getElementById('dishes_p');
    contentRef.innerHTML = "";
    for (let index = 0; index < myDishesP.length; index++) {
        contentRef.innerHTML += getDishTemplate(myDishesP[index]);
    }
}

// render Salad
function renderMyDishesS() {
    const contentRef = document.getElementById('dishes_s');
    contentRef.innerHTML = "";
    for (let index = 0; index < myDishesS.length; index++) {
        contentRef.innerHTML += getDishTemplate(myDishesS[index]);
    }
}

renderMyDishesBs();
renderMyDishesP();
renderMyDishesS();

// add Dishes to Basket
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
    renderBasket();
}

// render Basket
function renderBasket() {
    const basketRef = document.getElementById('basket_content');
    basketRef.innerHTML = getBasketWrapperTemplate();

    const basketItemsRef = document.getElementById('order_content');
    for (let index = 0; index < basket.length; index++) {
    basketItemsRef.innerHTML += getBasketTemplate(index);
}
    basketSummary();
}

// remove Order from Basket
function removeFromBasket(index) {
    basket.splice(index, 1);

    renderBasket();
}

// calculate Basket
function calculateBasketTotal() {
    let total = 0;
    for (let index = 0; index < basket.length; index++) {
        total += basket[index].price * basket[index].amount;
    }

    return total;
}

// zugabe zum Menü
function increaseAmount(index) {
    basket[index].amount++;
    
    renderBasket();
}

// entnahme des Menüs
function decreaseAmount(index) {
    if (basket[index].amount > 1) {
        basket[index].amount--;
    } else {
        basket.splice(index, 1);
    }

    renderBasket();
}

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
}

function buyNow() {
    const overlay = document.getElementById('order_overlay');
    overlay.classList.add('overlay_active');
    document.body.style.overflow = "hidden";

    basket = [];

    renderBasket();
}

function closeOverlay() {
    document.getElementById('order_overlay')
    .classList.remove('overlay_active');
    document.body.style.overflow = "auto";
}