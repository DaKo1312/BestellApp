function getDishTemplate(dish) {
    return `
        <div class="dish_card">
            <div class="dish_img_container">
                <img
                    src="${dish.image}"
                    alt="${dish.name}"
                >
            </div>
            <div class="dish_content">
                <div class="dish_left">
                    <div class="dish_title">
                        <h3>${dish.name}</h3>
                        <div class="dish_description">
                            <p>${dish.description}</p>
                        </div>
                    </div>
                </div>
                <div class="dish_right">
                    <div class="dish_price">
                        <span>
                            <b>
                                ${dish.price.toLocaleString("de-DE", {
                                    // Preis wird in des Deutsche Format gewandelt damit der Preis mit einem KOMMA dargestellt wird
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                })}€
                            </b>
                        </span>
                        </div>
                        <div class="dish_footer">
                            <button 
                                class="basket_button"
                                onclick='addToBasket(${JSON.stringify(dish)})'>
                                Add to basket
                            </button>
                        </div>
                </div>
            </div>
        </div>
    `;
}

function getBasketTemplate(index) {
    return `
        <div class="basket_item">
            <div class="basket_item_top">
                <h4>
                    ${basket[index].name}
                </h4>
                <button onclick="removeFromBasket(${index})">
                    🗑️
                </button>
            </div>
            <div class="basket_item_bottom">
                <div class="basket_amount">
                    <button onclick="decreaseAmount(${index})">
                        -
                    </button>
                    <span>
                        ${basket[index].amount}
                    </span>
                    <button onclick="increaseAmount(${index})">
                        +
                    </button>
                </div>
                <p>
                    ${(basket[index].price * basket[index].amount).toLocaleString("de-DE", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })}€
                </p>
            </div>
        </div>
    `;
}

function getBasketWrapperTemplate() {
    return `
        <h3>Your Basket</h3>
        <div class="basket_scroll">
            <div id="order_content" class="basket_items"></div>
        </div>
        <table class="basket_summary_table">
            <tr>
                <td>Subtotal</td>
                <td id="subtotal"></td>
            </tr>
            <tr>
                <td>Delivery fee</td>
                <td id="delivery_fee"></td>
            </tr>
            <tr>
                <td colspan="2">
                    <div class="summary_line"></div>
                </td>
            </tr>
            <tr class="total_row">
                <td>Total</td>
                <td id="total"></td>
            </tr>
        </table>
        <button id="buy_button"
            class="buy_button"
            onclick="buyNow()">
            Buy now (<span id="buy_total"></span>)
        </button>
    `;
}
