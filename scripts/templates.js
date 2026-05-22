function getDishTemplate(index) {
    return `
        <div class="dish_card">
            <div class="dish_img_container">
                <img 
                    src="${myDishesBs[index].image}" 
                    alt="${myDishesBs[index].name}"
                >
            </div>
            <div class="dish_content">
                <div class="dish_header">
                    <div class="dish_title">
                        <h2>${myDishesBs[index].name}</h2>
                    </div>
                    <div class="dish_price">
                        <p><b>${myDishesBs[index].price.toLocaleString("de-DE", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                            })} 
                        €</b></p>
                    </div>
                </div>
                <div class="dish_description">
                    <p>${myDishesBs[index].description}</p>
                </div>
                <div class="dish_footer">
                    <button class="basket_btn">
                        Add to basket
                    </button>
                </div>
            </div>
        </div>
    `;
}

// function getDishTemplate(index) {
//     return `
//         <div class="dish_card">
//             <div class="dish_img_container">
//                 <img 
//                     src="${myDishesP[index].image}" 
//                     alt="${myDishesP[index].name}"
//                 >
//             </div>
//             <div class="dish_content">
//                 <div class="dish_header">
//                     <div class="dish_title">
//                         <h2>${myDishesP[index].name}</h2>
//                     </div>
//                     <div class="dish_price">
//                         <p><b>${myDishesP[index].price.toLocaleString("de-DE", {
//                             minimumFractionDigits: 2,
//                             maximumFractionDigits: 2
//                             })} 
//                         €</b></p>
//                     </div>
//                 </div>
//                 <div class="dish_description">
//                     <p>${myDishesP[index].description}</p>
//                 </div>
//                 <div class="dish_footer">
//                     <button class="basket_btn">
//                         Add to basket
//                     </button>
//                 </div>
//             </div>
//         </div>
//     `;
// }