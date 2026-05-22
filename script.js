function renderMyDishesBs() {
    let contentRef = document.querySelector('#dishes_container_bs .dishes_bs');
    contentRef.innerHTML = "";
    for (let index = 0; index < myDishesBs.length; index++) {
        contentRef.innerHTML += getDishTemplate(index);
    }
}

function renderMyDishesP() {
    let contentRef = document.querySelector('#dishes_container_p .dishes_p');
    contentRef.innerHTML = "";
    for (let index = 0; index < myDishesP.length; index++) {
        contentRef.innerHTML += getDishTemplate(index);
    }
}