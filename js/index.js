

import tabs from './modules/tabs';
import timer from './modules/timer';
import cards from './modules/cards';
import calculator from './modules/calculator';
import forms from './modules/forms';
import slider from './modules/slider';
import modal from './modules/modal';
import {openModal, showModalByScroll} from './modules/modal';

window.addEventListener("DOMContentLoaded", () => {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 5000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', '2023-6-1');
    cards();
    forms("form", modalTimerId);
    calculator();
    modal(".modal", "[data-modal]", modalTimerId);
    slider({
        container: ".offer__slider",
        allSlides: ".offer__slide",
        nextArrow: ".offer__slider-next",
        prewArrow: ".offer__slider-prev",
        totalCounter: "#total",
        currentCounter: "#current",
        wrapper: ".offer__slider-wrapper",
        field: ".offer__slider-inner"
    });
})
