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
                <div class="dish_header">
                    <div class="dish_title">
                        <h3>${dish.name}</h3>
                    </div>
                    <div class="dish_price">
                        <p>
                            <b>
                                ${dish.price.toLocaleString("de-DE", {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                })}€
                            </b>
                        </p>
                    </div>
                </div>
                <div class="dish_description">
                    <p>${dish.description}</p>
                </div>
                <div class="dish_footer">
                    <button class="basket_button">
                        Add to basket
                    </button>
                </div>
            </div>
        </div>
    `;
}

