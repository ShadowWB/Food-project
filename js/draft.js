"use strict"

window.addEventListener('DOMContentLoaded', () => {

    //tabs
    // function tabs (){
    //
    //     const tabs = document.querySelectorAll('.tabheader__item'),
    //         tabsContent = document.querySelectorAll('.tabcontent'),
    //         tabsParent = document.querySelector('.tabheader__items');
    //
    //     function hideTabContent() {
    //         tabsContent.forEach(item => {
    //             item.classList.add('hide');      //item.style.display='none';
    //             item.classList.remove('show', 'fade');
    //         })
    //         tabs.forEach(item => {
    //             item.classList.remove('tabheader__item_active')
    //         })
    //     }
    //
    //     function showTabContent(i = 0) {
    //         tabsContent[i].classList.remove('hide');
    //         tabsContent[i].classList.add('show', 'fade');   //  tabsContent[i].style.display = 'block';
    //         tabs[i].classList.add('tabheader__item_active')
    //     }
    //
    //     hideTabContent();
    //     showTabContent();
    //
    //     tabsParent.addEventListener('click', (event) => {
    //         let target = event.target;
    //
    //         if (target && target.classList.contains('tabheader__item')) {
    //             tabs.forEach((item, i) => {
    //                 if (item === target) {
    //                     hideTabContent();
    //                     showTabContent(i);
    //                 }
    //             });
    //         }
    //     });
    // }

    //slider
    // import getZero from "./functions" ;
    // function slider(){
    //     const currentCounterSlide = document.querySelector("#current"),
    //         slider = document.querySelector(".offer__slider"),
    //         totalCountSlides = document.querySelector("#total"),
    //         prevBtn = document.querySelector(".offer__slider-prev"),
    //         nextBtn = document.querySelector(".offer__slider-next"),
    //         slides = document.querySelectorAll(".offer__slide"),
    //         slidesParent = document.querySelector(".offer__slider-wrapper"),
    //         sliderWrapper = document.querySelector(".offer__slider-wrapper"),
    //         sliderField = document.querySelector(".offer__slider-inner");
    //     let widthWindow = window.getComputedStyle(sliderWrapper).width,
    //         slideIndex = 1,
    //         offSet = 0;
    //
    //     widthWindow = +widthWindow.slice(0, widthWindow.length - 2); // removing "px"
    //
    //     totalCountSlides.textContent = getZero(slides.length);
    //     currentCounterSlide.textContent = getZero(slideIndex);
    //
    //     offSet = +widthWindow * (slideIndex - 1);
    //     sliderField.style.transform = `translateX(-${offSet}px)`;
    //
    //     sliderField.style.width = 100 * slides.length + "%";
    //     sliderField.style.display = "flex";
    //     sliderField.style.transition = ".5s all";
    //
    //     sliderWrapper.style.overflow = "hidden";
    //
    //     prevBtn.addEventListener("click", changeForPrewSlide);
    //     nextBtn.addEventListener("click", changeForNextSlide);
    //     slidesParent.addEventListener("click", changeForNextSlide);
    //
    //     slider.style.position = "relative";
    //     const indicators = document.createElement("ol"),
    //         dots = [];
    //     indicators.classList.add('carousel__indicators');
    //     indicators.style.cssText = `
    //        position: absolute;
    // right: 0;
    // bottom: 0;
    // left: 0;
    // z-index: 15;
    // display: flex;
    // justify-content: center;
    // margin-right: 15%;
    // margin-left: 15%;
    // list-style: none;
    // `;
    //     slider.append(indicators);
    //
    //     for (let i = 0; i < slides.length; i++) {
    //         const dot = document.createElement("il");
    //         dot.setAttribute("data-slide-to", i + 1);
    //         dot.style.cssText = `
    //         box-sizing: content-box;
    //         flex: 0 1 auto;
    //         width: 30px;
    //         height: 6px;
    //         margin-right: 3px;
    //         margin-left: 3px;
    //         cursor: pointer;
    //         background-color: #fff;
    //         background-clip: padding-box;
    //         border-top: 10px solid transparent;
    //         border-bottom: 10px solid transparent;
    //         opacity: .5;
    //        transition: opacity .6s ease;
    //     `;
    //         indicators.append(dot);
    //
    //         dots.push(dot);
    //
    //         if (i === slideIndex - 1) dot.style.opacity = 1;
    //     }
    //     function changeForPrewSlide() {
    //         if (offSet === 0) {
    //             offSet = +widthWindow * (slides.length - 1);
    //             slideIndex = slides.length;
    //         } else {
    //             offSet -= widthWindow;
    //             slideIndex -= 1;
    //         }
    //         moveSlide();
    //         setActiveDot();
    //     }
    //     function changeForNextSlide() {
    //         if (offSet == widthWindow * (slides.length - 1)) {
    //             offSet = 0;
    //             slideIndex = 1;
    //         } else {
    //             offSet += widthWindow;
    //             slideIndex += 1;
    //         }
    //         moveSlide()
    //         setActiveDot();
    //     }
    //     dots.forEach(dot => {
    //         dot.addEventListener("click",(e)=>{
    //             const slideTo = e.target.getAttribute("data-slide-to");
    //             slideIndex = +slideTo;
    //             offSet = +widthWindow * (slideTo - 1);
    //
    //             moveSlide();
    //             setActiveDot();
    //         })
    //     });
    //
    //     function moveSlide(){
    //         sliderField.style.transform = `translateX(-${offSet}px)`;
    //         currentCounterSlide.textContent = getZero(slideIndex);
    //     }
    //     function setActiveDot(){
    //         dots.forEach(dot => {
    //             dot.style.opacity = 0.5;
    //         });
    //         dots[slideIndex-1].style.opacity = 1;
    //     }
    //
    //     window.addEventListener("resize", (e) => {
    //         widthWindow = window.getComputedStyle(sliderWrapper).width;
    //         widthWindow = +widthWindow.slice(0, widthWindow.length - 2);
    //         offSet = window.getComputedStyle(sliderWrapper).width;
    //         offSet = +offSet.slice(0, offSet.length - 2);
    //         sliderField.style.width = 100 * slides.length + "%";
    //     });
    //
    // }

    //  cards
//     const modal = document.querySelector(".modal"),
//         modalTriggers = document.querySelectorAll("[data-modal]");
//
//     function openModal() {
//         modal.classList.add("show");
//         modal.classList.remove("hide");
//         document.body.style.overflow = "hidden";
//         clearTimeout(modalTimerId);
//     }
//
//     function closeModal() {
//         modal.classList.add("hide");
//         modal.classList.remove("show");
//         document.body.style.overflow = "";
//         window.removeEventListener("scroll", showModalByScroll);
//     }
//
//     modalTriggers.forEach((btn) => {
//         btn.addEventListener("click", openModal);
//     });
//
//     modal.addEventListener("click", (e) => {
//         if (e.target === modal || e.target.getAttribute('data-close') === '') {
//             closeModal()
//         }
//     });
//
//     document.addEventListener("keydown", (e) => {
//         if (e.code === "Escape" && modal.classList.contains("show")) closeModal();
//     });
//
//     const modalTimerId = setTimeout(openModal, 50000);
//
//     function showModalByScroll() {
//         if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
//             openModal();
//             window.removeEventListener("scroll", showModalByScroll);
//         }
//     }
//     window.addEventListener("scroll", showModalByScroll);
//
//     //server data rendering with function (making cards)
//     //
//     fetch("http://localhost:3000/menu")
//         .then(data => data.json())
//         .then(cardsArr => {
//             cardRendering(cardsArr, ".menu .container")
//         })
//
//     function cardRendering(arrData, parentClass) {
//         arrData.forEach(({img, altimg, title, descr, price}) => {  // object destruction {"","","",""}
//             let card = document.createElement("div");
//             card.classList.add("menu__item");
//             card.innerHTML = `
//                       <img src=${img} alt=${altimg}>
//                     <h3 class="menu__item-subtitle">${title}</h3>
//                     <div class="menu__item-descr">${descr} </div>
//                     <div class="menu__item-divider"></div>
//                      <div class="menu__item-price">
//                         <div class="menu__item-cost">Цена:</div>
//                         <div class="menu__item-total"><span>${price}</span> грн/день</div>
//                     </div>
//                 `;
//             document.querySelector(parentClass).append(card)
//         });
//     }

    // timer
    // import getZero from  "./functions";
    // function timer(){
    //     const deadLine = '2023-6-1';
    //
    //     function getTimeRemaining(endTime) {
    //         let days, hours, minutes, seconds;
    //         const mlSecondsLeft = Date.parse(endTime) - Date.parse(new Date());
    //
    //         if (mlSecondsLeft <= 0) {
    //             days = 0;
    //             hours = 0;
    //             minutes = 0;
    //             seconds = 0;
    //         } else {
    //             days = Math.floor(mlSecondsLeft / (1000 * 60 * 60 * 24));
    //             hours = Math.floor((mlSecondsLeft / (1000 * 60 * 60)) % 24);
    //             minutes = Math.floor((mlSecondsLeft / (1000 * 60)) % 60);
    //             seconds = Math.floor((mlSecondsLeft / (1000)) % 60);
    //         }
    //
    //         return {
    //             'mlSecondsLeft': mlSecondsLeft, days, hours, minutes, seconds
    //         };
    //     }
    //
    //
    //
    //     function setClock(selector, endTime) {
    //         const timer = document.querySelector(selector),
    //             days = timer.querySelector('#days'),
    //             hours = timer.querySelector('#hours'),
    //             minutes = timer.querySelector('#minutes'),
    //             seconds = timer.querySelector('#seconds'),
    //             timeInterval = setInterval(updateClock, 1000);
    //
    //         updateClock();
    //
    //         function updateClock() {
    //             const allData = getTimeRemaining(endTime);
    //             days.innerHTML = getZero(allData.days);
    //             hours.innerHTML = getZero(allData.hours);
    //             minutes.innerHTML = getZero(allData.minutes);
    //             seconds.innerHTML = getZero(allData.seconds);
    //
    //             if (allData.mlSecondsLeft <= 0) {
    //                 clearInterval(timeInterval);
    //             }
    //         }
    //     }
    //     setClock('.timer', deadLine);
    // }

    //calculator
    // function  calc (){
    //     // calculator
    //     //
    //     const result = document.querySelector(".calculating__result span");
    //     let sex='female',height,weight,age,ratio=1.375;
    //
    //     if(localStorage.getItem("sex")){
    //         sex = localStorage.getItem("sex");
    //     }else{
    //         sex = "female";
    //         localStorage.setItem("sex","female");
    //     }
    //
    //     if(localStorage.getItem("ratio")){
    //         ratio = localStorage.getItem("ratio");
    //     }else{
    //         ratio = "female";
    //         localStorage.setItem("ratio",1.375);
    //     }
    //
    //     function initLocalSettings (selector,activeClass){
    //         const elements = document.querySelectorAll(selector);
    //
    //         elements.forEach(elem =>{
    //             elem.classList.remove(activeClass);
    //             if(elem.getAttribute("id")===localStorage.getItem("sex")){
    //                 elem.classList.add(activeClass);
    //             }
    //             if(elem.getAttribute("data-ratio")===localStorage.getItem("ratio")){
    //                 elem.classList.add(activeClass);
    //             }
    //         });
    //     }
    //
    //     initLocalSettings("#gender div", "calculating__choose-item_active");
    //     initLocalSettings( ".calculating__choose_big div","calculating__choose-item_active");
    //
    //     function calcTotal (){
    //         if(!sex || !height || !weight || !age || !ratio){
    //             result.textContent = "____";
    //             return;
    //         }
    //
    //         if(sex ==="female"){
    //             result.textContent = Math.round( (447.6+(9.2 * weight) + (3.1 * height) - (4.3 * age))* ratio);
    //         }
    //         if(sex ==="male"){
    //             result.textContent=Math.round( (88.36+(13.4 * weight) + (4.8 * height) - (5.7 * age))* ratio);
    //         }
    //     }
    //     calcTotal ();
    //
    //     function getStaticInformation(selector,activeClass){
    //         const elements = document.querySelectorAll(selector);
    //
    //         elements.forEach(element=>{
    //             element.addEventListener("click",(e)=>{
    //
    //                 if(e.target.getAttribute("data-ratio")){
    //                     ratio = e.target.getAttribute("data-ratio") ;
    //                     localStorage.setItem("ratio", e.target.getAttribute("data-ratio"));
    //                 }else {
    //                     sex = e.target.getAttribute("id");
    //                     localStorage.setItem("sex", e.target.getAttribute("id"));
    //                 }
    //
    //                 elements.forEach(el =>{
    //                     el.classList.remove(activeClass);
    //                 })
    //                 e.target.classList.add(activeClass);
    //
    //                 calcTotal ();
    //             })
    //         })
    //     }
    //     getStaticInformation("#gender div","calculating__choose-item_active");
    //     getStaticInformation(".calculating__choose_big div","calculating__choose-item_active");
    //
    //     function getDynamicInformation (selector){
    //         const input = document.querySelector(selector);
    //
    //         input.addEventListener("input",()=>{
    //             if (input.value.match(/\D/g)){
    //                 input.style.border = "1px solid red";
    //             }else{
    //                 input.style.border = "none";
    //             }
    //
    //             switch (input.getAttribute('id')) {
    //                 case 'height':
    //                     height = +input.value;
    //                     break;
    //                 case 'weight':
    //                     weight = +input.value;
    //                     break;
    //                 case 'age':
    //                     age = +input.value;
    //                     break;
    //             }
    //             calcTotal ();
    //         });
    //     }
    //     getDynamicInformation ('#height');
    //     getDynamicInformation ('#weight');
    //     getDynamicInformation ('#age');
    // }

    //   FORM . FORM  new XMLHttpRequest()
    //
    //
    // const forms = document.querySelectorAll("form");
    //
    // const message = {
    //     loading: 'img/form/spinner.svg',
    //     success: "Thanks,we'll call you soon",
    //     failure: "Some problem"
    // }
    //
    // function postData(form) {
    //     form.addEventListener("submit", (event) => {
    //         event.preventDefault();
    //
    //         const statusMessage = document.createElement("img");
    //         statusMessage.src = message.loading;
    //         statusMessage.style.cssText =`
    //             display: block;
    //             margin: 7px auto;
    //         `;
    //         form.insertAdjacentElement("afterend", statusMessage)
    //
    //         const request = new XMLHttpRequest();
    //         request.open("POST", "server.php");
    //
    //         const formData = new FormData(form);
    //         //or this 1) sending not JSON data format
    //         // request.send(formData);
    //         //without request.setRequestHeader("Content-type", "multipart/form-data");no need for not JSON data
    //
    //         //or this 2) sending  JSON data format
    //         request.setRequestHeader("Content-type", "application/json");//just fore JSON we need to set HEADERS !!
    //         let obj = {};
    //         formData.forEach((value, key) => {
    //             obj[key] = value;
    //         })
    //         const json = JSON.stringify(obj);
    //         request.send(json);
    //         //
    //
    //         request.addEventListener("load", () => {
    //             if (request.status === 200) {
    //                 console.log(request.response);
    //                 showThanksModal(message.success);
    //                 form.reset();
    //                     statusMessage.remove();
    //             } else {
    //                 showThanksModal(message.failure) ;
    //             }
    //         })
    //
    //     })
    // }
    //
    // forms.forEach(form => {
    //     postData(form);
    // })

    //     //  FORM . FORM fetch async await
//
//     const forms = document.querySelectorAll("form");
//
//     const message = {
//         loading: 'img/form/spinner.svg',
//         success: "Thanks,we'll call you soon",
//         failure: "Some problem"
//     };
//
//     forms.forEach(form => {
//         postDataBind(form);
//     });
//
//     const getData = async (url) => {
//         const res = await fetch(url);
//         if (!res.ok) {
//             throw new Error("Some error !  " + res.status);
//         }
//         return await res.json();
//     }
//     // getData(' http://localhost:3000/requests')
//     //     .then(res => { res.forEach(i=>console.log(i))})
//     //     .catch(()=>console.log("error"));
//     //
//     async function postData(url, data) {
//         const res = await fetch(url, {
//             method: "POST",
//             // body: JSON.stringify(data), //if data is an object
//             body: data, //if data is a json format already
//             headers: {
//                 'Content-type': 'application/json'
//             }
//         });
//         return await res.json()
//     }
//
//     // postData(' http://localhost:3000/requests',JSON.stringify({ name:"Money" }));
// //
//     function postDataBind(form) {
//         form.addEventListener("submit", (event) => {
//             event.preventDefault();
//
//             const statusMessage = document.createElement("img");
//             statusMessage.src = message.loading;
//             statusMessage.style.cssText = `
//                 display: block;
//                 margin: 7px auto;
//             `;
//             form.insertAdjacentElement("afterend", statusMessage);
//
//             const formData = new FormData(form);
//             formData.set("data", new Date()); // nice )
//             //                         json          {}        [ ['name','value'],['name','value'] ]
//             const jsonFormData = JSON.stringify(Object.fromEntries(formData.entries()));
//
//             postData("http://localhost:3000/requests", jsonFormData)
//                 .then(response => {
//                     console.log(response);
//                     showThanksModal(message.success);
//                     statusMessage.remove();
//                 })
//                 .catch(() => {
//                     showThanksModal(message.failure);
//                     console.log(new Error("Down bro...error"));
//                 })
//                 .finally(() => {
//                     form.reset()
//                 });
//         });
//     }
// //
//     function showThanksModal(message) {
//         const prevModalDialog = document.querySelector(".modal__dialog");
//
//         prevModalDialog.classList.add('hide');
//         openModal();
//
//         const thanksModal = document.createElement("div");
//         thanksModal.classList.add('modal__dialog');
//         thanksModal.innerHTML = `
//         <div class="modal__content">
//           <div class="modal__close" data-close>&times;</div>
//           <div class="modal__title">${message}</div>
//         </div>
//         `;
//         document.querySelector(".modal").append(thanksModal);
//
//         setTimeout(() => {
//             thanksModal.remove();
//             prevModalDialog.classList.add('show');
//             prevModalDialog.classList.remove('hide');
//             closeModal();
//         }, 4000)
//     }
//
// //
//     //slider N1 slider N1 slider N1
// //
//     // const currentCounterSlide = document.querySelector("#current"),
//     //     totalCountSlides = document.querySelector("#total"),
//     //     prevBtn  =document.querySelector(".offer__slider-prev"),
//     //     nextBtn = document.querySelector(".offer__slider-next"),
//     //     slides = document.querySelectorAll(".offer__slide"),
//     //     slidesParent = document.querySelector(".offer__slider-wrapper");
//     // let slideIndex = -1;
//     // changeNextSlide()
//     //
//     // const addZero = (num)=> num <10 ? "0" + num : num;
//     //
//     // totalCountSlides.innerHTML = addZero (slides.length);
//     // currentCounterSlide.innerHTML = getZero(slideIndex+1);
//     //
//     // nextBtn.addEventListener("click", changeNextSlide);
//     // prevBtn.addEventListener("click",changePrevSlide );
//     // slidesParent.addEventListener("click",changeNextSlide);
//     //
//     // function changeNextSlide(){
//     //     slideIndex++
//     //     if (slideIndex === slides.length) slideIndex = 0 ;
//     //
//     //     currentCounterSlide.textContent = getZero(slideIndex+1)
//     //     slides.forEach(slide=>{
//     //         slide.classList.add("hide")
//     //     })
//     //     slides[slideIndex].classList.add("show")
//     //     slides[slideIndex].classList.remove("hide")
//     // }
//     //
//     // function changePrevSlide(){
//     //     --slideIndex
//     //     if (slideIndex < 0 ){
//     //         slideIndex =  slides.length -1
//     //     }
//     //     currentCounterSlide.textContent = getZero(slideIndex+1 )
//     //     slides.forEach(slide=>{
//     //         slide.classList.add("hide")
//     //     })
//     //     slides[slideIndex].classList.add("show")
//     //     slides[slideIndex].classList.remove("hide")
//     // }
//
//     //
//     //slider N1 slider N1 slider N2 (BETTER)
//     //
//     // const currentCounterSlide = document.querySelector("#current"),
//     //     totalCountSlides = document.querySelector("#total"),
//     //     prevBtn = document.querySelector(".offer__slider-prev"),
//     //     nextBtn = document.querySelector(".offer__slider-next"),
//     //     slides = document.querySelectorAll(".offer__slide"),
//     //     slidesParent = document.querySelector(".offer__slider-wrapper");
//     // let slideIndex = 0;
//     //
//     // changeNextSlide(slideIndex)
//     //
//     // const addZero = (num) => num < 10 ? "0" + num : num;
//     // totalCountSlides.textContent = addZero(slides.length);
//     //
//     // nextBtn.addEventListener("click", nextEl);
//     // prevBtn.addEventListener("click", prevEl);
//     // slidesParent.addEventListener("click",nextEl);
//     //
//     // function changeNextSlide(n) {
//     //     if (n === slides.length) slideIndex = 0;
//     //     if (n < 0) slideIndex = slides.length - 1 ;
//     //
//     //     currentCounterSlide.textContent = getZero(slideIndex + 1)
//     //     slides.forEach(slide => slide.style.display = "none" );
//     //
//     //     slides[slideIndex].style.display = "block";
//     // }
//     // function  plusSlide (n){
//     //     changeNextSlide( slideIndex += n)
//     // }
//     //
//     // function nextEl(){
//     //     plusSlide(+1);
//     // }
//     // function prevEl(){
//     //     plusSlide(-1);
//     // }
//
//     //
//     //SLIDER N3 (CAROUSEL)
//     //
//     const currentCounterSlide = document.querySelector("#current"),
//         slider = document.querySelector(".offer__slider"),
//         totalCountSlides = document.querySelector("#total"),
//         prevBtn = document.querySelector(".offer__slider-prev"),
//         nextBtn = document.querySelector(".offer__slider-next"),
//         slides = document.querySelectorAll(".offer__slide"),
//         slidesParent = document.querySelector(".offer__slider-wrapper"),
//         sliderWrapper = document.querySelector(".offer__slider-wrapper"),
//         sliderField = document.querySelector(".offer__slider-inner");
//     let widthWindow = window.getComputedStyle(sliderWrapper).width,
//         slideIndex = 1,
//         offSet = 0;
//
//     widthWindow = +widthWindow.slice(0, widthWindow.length - 2); // removing "px"
//
//     totalCountSlides.textContent = getZero(slides.length);
//     currentCounterSlide.textContent = getZero(slideIndex);
//
//     offSet = +widthWindow * (slideIndex - 1);
//     sliderField.style.transform = `translateX(-${offSet}px)`;
//
//     sliderField.style.width = 100 * slides.length + "%";
//     sliderField.style.display = "flex";
//     sliderField.style.transition = ".5s all";
//
//     sliderWrapper.style.overflow = "hidden";
//
//     prevBtn.addEventListener("click", changeForPrewSlide);
//     nextBtn.addEventListener("click", changeForNextSlide);
//     slidesParent.addEventListener("click", changeForNextSlide);
//
//     slider.style.position = "relative";
//     const indicators = document.createElement("ol"),
//         dots = [];
//     indicators.classList.add('carousel__indicators');
//     indicators.style.cssText = `
//            position: absolute;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     z-index: 15;
//     display: flex;
//     justify-content: center;
//     margin-right: 15%;
//     margin-left: 15%;
//     list-style: none;
//     `;
//     slider.append(indicators);
//
//     for (let i = 0; i < slides.length; i++) {
//         const dot = document.createElement("il");
//         dot.setAttribute("data-slide-to", i + 1);
//         dot.style.cssText = `
//             box-sizing: content-box;
//             flex: 0 1 auto;
//             width: 30px;
//             height: 6px;
//             margin-right: 3px;
//             margin-left: 3px;
//             cursor: pointer;
//             background-color: #fff;
//             background-clip: padding-box;
//             border-top: 10px solid transparent;
//             border-bottom: 10px solid transparent;
//             opacity: .5;
//            transition: opacity .6s ease;
//         `;
//         indicators.append(dot);
//
//         dots.push(dot);
//
//         if (i === slideIndex - 1) dot.style.opacity = 1;
//     }
//     function changeForPrewSlide() {
//         if (offSet === 0) {
//             offSet = +widthWindow * (slides.length - 1);
//             slideIndex = slides.length;
//         } else {
//             offSet -= widthWindow;
//             slideIndex -= 1;
//         }
//         moveSlide();
//         setActiveDot();
//     }
//     function changeForNextSlide() {
//         if (offSet == widthWindow * (slides.length - 1)) {
//             offSet = 0;
//             slideIndex = 1;
//         } else {
//             offSet += widthWindow;
//             slideIndex += 1;
//         }
//         moveSlide()
//         setActiveDot();
//     }
//     dots.forEach(dot => {
//         dot.addEventListener("click",(e)=>{
//             const slideTo = e.target.getAttribute("data-slide-to");
//             slideIndex = +slideTo;
//             offSet = +widthWindow * (slideTo - 1);
//
//             moveSlide();
//             setActiveDot();
//         })
//     });
//
//     function moveSlide(){
//         sliderField.style.transform = `translateX(-${offSet}px)`;
//         currentCounterSlide.textContent = getZero(slideIndex);
//     }
//     function setActiveDot(){
//         dots.forEach(dot => {
//             dot.style.opacity = 0.5;
//         });
//         dots[slideIndex-1].style.opacity = 1;
//     }
//     //
//     // for slider
//     //
//     window.addEventListener("resize", (e) => {
//         widthWindow = window.getComputedStyle(sliderWrapper).width;
//         widthWindow = +widthWindow.slice(0, widthWindow.length - 2);
//         offSet = window.getComputedStyle(sliderWrapper).width;
//         offSet = +offSet.slice(0, offSet.length - 2);
//         sliderField.style.width = 100 * slides.length + "%";
//     });

});
