// render Burger
function renderMyDishesBs() {
    let contentRef = document.querySelector('#dishes_container_bs .dishes_bs');
    contentRef.innerHTML = "";
    for (let index = 0; index < myDishesBs.length; index++) {
        contentRef.innerHTML += getDishTemplate(myDishesBs[index]);
    }
}

// render Pizza
function renderMyDishesP() {
    let contentRef = document.querySelector('#dishes_container_p .dishes_p');
    contentRef.innerHTML = "";
    for (let index = 0; index < myDishesP.length; index++) {
        contentRef.innerHTML += getDishTemplate(myDishesP[index]);
    }
}

// render Salad
function renderMyDishesS() {
    let contentRef = document.querySelector('#dishes_container_s .dishes_s');
    contentRef.innerHTML = "";
    for (let index = 0; index < myDishesS.length; index++) {
        contentRef.innerHTML += getDishTemplate(myDishesS[index]);
    }
}

renderMyDishesBs();
renderMyDishesP();
renderMyDishesS();