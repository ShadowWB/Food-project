import {getResource} from "../services/services"
function cards(){

   getResource("http://localhost:3000/menu")
        .then(cardsArr => {
            cardRendering(cardsArr, ".menu .container")
        })

    function cardRendering(arrData, parentClass) {
        arrData.forEach(({img, altimg, title, descr, price}) => {  // object destruction {"","","",""}
            let card = document.createElement("div");
            card.classList.add("menu__item");
            card.innerHTML = `
                      <img src=${img} alt=${altimg}>
                    <h3 class="menu__item-subtitle">${title}</h3>
                    <div class="menu__item-descr">${descr} </div>
                    <div class="menu__item-divider"></div>
                     <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${price}</span> грн/день</div>
                    </div>
                `;
            document.querySelector(parentClass).append(card)
        });
    }
}

export default cards;