

 "use strict"

//  Tabs Tabs Tabs Tabs
// window.addEventListener("DOMContentLoaded", () => {
//
//     const tabs = document.querySelectorAll('.tabheader__item'),
//         tabsParent = document.querySelector('.tabheader__items'),
//         tabsContent = document.querySelectorAll('.tabcontent');
//
//     function hideTabsContent() {
//         tabsContent.forEach(item => {
//             item.classList.remove('show');
//             item.classList.add('hide');
//         });
//         tabs.forEach(item => {
//             item.classList.remove('tabheader__item_active');
//         })
//     }
//
//     function showTabsContent(i = 0) {
//         tabsContent[i].classList.add('show');
//         tabsContent[i].classList.remove('hide');
//
//         tabs[i].classList.add('tabheader__item_active')
//     }
//
//     hideTabsContent()
//     showTabsContent()
//
//     tabsParent.addEventListener('click', (event) => {
//             const target = event.target;
//
//             if (target && target.classList.contains('tabheader__item')) {
//                 tabs.forEach((item, i) => {
//                     if (item == target) {
//                         hideTabsContent();
//                         showTabsContent(i)
//                     }
//                 })
//             }
//         }
//     )
// })

// //tabs
//
// window.addEventListener('DOMContentLoaded',()=>{
//
//     const tabs = document.querySelectorAll('.tabheader__item '),
//         tabsParent = document.querySelector('.tabheader__items'),
//         tabsContent = document.querySelectorAll('.tabcontent');
//
//     function hideTabsContent(){
//         tabsContent.forEach(item=>{
//             item.classList.add('hide');
//             item.classList.remove('show')
//         });
//         tabs.forEach(item=>{
//             item.classList.remove('tabheader__item_active')
//         })
//     }
//
//     function showTabsContent(i=0){
//         tabsContent[i].classList.remove('hide');
//         tabsContent[i].classList.add('show');
//         tabs[i].classList.add('tabheader__item_active')
//     }
//
//     hideTabsContent();
//     showTabsContent();
//
//     tabsParent.addEventListener('click',(event)=>{
//         const target = event.target;
//
//         if (target && target.classList.contains('tabheader__item')){
//             tabs.forEach((item,i)=>{
//                 if (item==target){
//                     hideTabsContent();
//                     showTabsContent(i);
//                     console.dir(target)
//                     console.log(target.childen)
//                 }
//             });
//         }
//     });
// });
//

 // cards rendering
 // function cards(){
 //
 //  //modal MODAL
 //
 //  const modal = document.querySelector(".modal"),
 //      modalTriggers = document.querySelectorAll("[data-modal]");
 //
 //  // closeBtns = document.querySelectorAll("[data-close]")
 //
 //  function openModal() {
 //   modal.classList.add("show");
 //   modal.classList.remove("hide");
 //   document.body.style.overflow = "hidden";
 //   clearTimeout(modalTimerId);
 //  }
 //
 //  function closeModal() {
 //   modal.classList.add("hide");
 //   modal.classList.remove("show");
 //   document.body.style.overflow = "";
 //   window.removeEventListener("scroll", showModalByScroll);
 //  }
 //
 //  modalTriggers.forEach((btn) => {
 //   btn.addEventListener("click", openModal);
 //  });
 //
 //  // closeBtns.forEach((btn) => {
 //  //     btn.addEventListener("click", closeModal);
 //  // });
 //
 //  modal.addEventListener("click", (e) => {
 //   if (e.target === modal || e.target.getAttribute('data-close') === '') {
 //    closeModal()
 //   }
 //  });
 //
 //  document.addEventListener("keydown", (e) => {
 //   if (e.code === "Escape" && modal.classList.contains("show")) closeModal();
 //  });
 //
 //  const modalTimerId = setTimeout(openModal, 50000);
 //
 //  function showModalByScroll() {
 //   if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
 //    openModal();
 //    window.removeEventListener("scroll", showModalByScroll);
 //   }
 //  }
 //
 //  window.addEventListener("scroll", showModalByScroll);
 //
 //
 //  //using classes for cards(creating,rendering)
 //
 //  class MenuCard {
 //   constructor(srs, alt, title, description, price, parentSelector, ...classes) {
 //    this.srs = srs;
 //    this.alt = alt;
 //    this.title = title;
 //    this.description = description;
 //    this.price = price;
 //    this.parentSelector = document.querySelector(parentSelector);
 //    this.classes = classes;
 //    this.transfer = 40;
 //    this.changeToUAN();
 //   }
 //
 //   changeToUAN() {
 //    this.price = this.price * this.transfer;
 //   }
 //
 //   render() {
 //    const element = document.createElement('div');
 //
 //    if (this.classes.length <= 0) this.classes = ["someOtherClass", "menu__item"];
 //    this.classes.forEach(className => element.classList.add(className));
 //    element.innerHTML = `
 //                    <img src=${this.srs} alt=${this.alt}>
 //                    <h3 class="menu__item-subtitle">${this.title}</h3>
 //                    <div class="menu__item-descr">${this.description} </div>
 //                    <div class="menu__item-divider"></div>
 //                    <div class="menu__item-price">
 //                        <div class="menu__item-cost">Цена:</div>
 //                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
 //                    </div>
 //            `;
 //    this.parentSelector.append(element);
 //   }
 //  }
 //
 //  //
 //  // server rendering with class
 //  //
 //  // fetch("http://localhost:3000/menu")
 //  //     .then(res => res.json())
 //  //     .then(res => {
 //  //         res.forEach( ({ img,  altimg, title ,descr , price }) =>{
 //  //             new MenuCard( img,  altimg, title ,descr , price ,".menu .container").render()
 //  //         })
 //  //
 //  //     })
 //  //
 //  //// manual card rendering
 //  //
 //  // new MenuCard(
 //  //     "img/tabs/vegy.jpg",
 //  //     "vegy",
 //  //     'Меню "Фитнес"',
 //  //     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежиховощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценойи высоким качеством!',
 //  //     333,
 //  //     ".menu .container",
 //  //     "menu__item"
 //  // )
 //  //     .render();
 //  //// new MenuCard( "img/tabs/vegy.jpg","","","","",".menu .container",).render()
 //
 //  //server data rendering with function (making cards)
 //  //
 //  fetch("http://localhost:3000/menu")
 //      .then(data => data.json())
 //      .then(cardsArr => {
 //       cardRendering(cardsArr, ".menu .container")
 //      })
 //
 //  function cardRendering(arrData, parentClass) {
 //   arrData.forEach(({img, altimg, title, descr, price}) => {  // object destruction {"","","",""}
 //    let card = document.createElement("div");
 //    card.classList.add("menu__item");
 //    card.innerHTML = `
 //                      <img src=${img} alt=${altimg}>
 //                    <h3 class="menu__item-subtitle">${title}</h3>
 //                    <div class="menu__item-descr">${descr} </div>
 //                    <div class="menu__item-divider"></div>
 //                     <div class="menu__item-price">
 //                        <div class="menu__item-cost">Цена:</div>
 //                        <div class="menu__item-total"><span>${price}</span> грн/день</div>
 //                    </div>
 //                `;
 //    document.querySelector(parentClass).append(card)
 //   });
 //  }
 // }

//
// //TIMER
//
// const deadLine = '2023-6-1';
//
// function getTimeRemaining(endTime) {
//     let days, hours, minutes, seconds;
//     const mlSecondsLeft = Date.parse(endTime) - Date.parse(new Date());
//
//     if (mlSecondsLeft <= 0) {
//         days = 0;
//         hours = 0;
//         minutes = 0;
//         seconds = 0;
//     } else {
//         days = Math.floor(mlSecondsLeft / (1000 * 60 * 60 * 24));
//         hours = Math.floor((mlSecondsLeft / (1000 * 60 * 60)) % 24);
//         minutes = Math.floor((mlSecondsLeft / (1000 * 60)) % 60);
//         seconds = Math.floor((mlSecondsLeft / (1000)) % 60);
//     }
//
//     return {
//         'mlSecondsLeft': mlSecondsLeft, days, hours, minutes, seconds
//     };
// }
//
// function getZero(num) {
//     if (num >= 0 && num < 10) {
//         return `0${num}`;
//     }
//     return num;
// }
//
// function setClock(selector, endTime) {
//     const timer = document.querySelector(selector),
//         days = timer.querySelector('#days'),
//         hours = timer.querySelector('#hours'),
//         minutes = timer.querySelector('#minutes'),
//         seconds = timer.querySelector('#seconds'),
//         timeInterval = setInterval(updateClock, 1000);
//
//     updateClock();
//
//     function updateClock() {
//         const allData = getTimeRemaining(endTime);
//         days.innerHTML = getZero(allData.days);
//         hours.innerHTML = getZero(allData.hours);
//         minutes.innerHTML = getZero(allData.minutes);
//         seconds.innerHTML = getZero(allData.seconds);
//
//         if (allData.mlSecondsLeft <= 0) {
//             clearInterval(timeInterval);
//         }
//     }
// }
//
// setClock('.timer', deadLine);
//
//


//
// //  FORM  FORM  FORM  FORM  FORM  FORM  new XMLHttpRequest()
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
////const json = JSON.stringify(Object.fromEntries(formData.entries()));   //short methods
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

//
// //modal MODAL
//
// const modal = document.querySelector(".modal"),
//     modalTriggers = document.querySelectorAll("[data-modal]");
//
// // closeBtns = document.querySelectorAll("[data-close]")
//
// function openModal() {
//     modal.classList.add("show");
//     modal.classList.remove("hide");
//     document.body.style.overflow = "hidden";
//     clearTimeout(modalTimerId);
// }
//
// function closeModal() {
//     modal.classList.add("hide");
//     modal.classList.remove("show");
//     document.body.style.overflow = "";
//     window.removeEventListener("scroll", showModalByScroll);
// }
//
// modalTriggers.forEach((btn) => {
//     btn.addEventListener("click", openModal);
// });
//
// // closeBtns.forEach((btn) => {
// //     btn.addEventListener("click", closeModal);
// // });
//
// modal.addEventListener("click", (e) => {
//     if (e.target === modal || e.target.getAttribute('data-close') === '') {
//         closeModal()
//     }
// });
//
// document.addEventListener("keydown", (e) => {
//     if (e.code === "Escape" && modal.classList.contains("show")) closeModal();
// });
//
// const modalTimerId = setTimeout(openModal, 50000);
//
// function showModalByScroll() {
//     if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
//         openModal();
//         window.removeEventListener("scroll", showModalByScroll);
//     }
// }
//
// window.addEventListener("scroll", showModalByScroll);
//
//

// //using classes for cards(creating,rendering)
//
// class MenuCard {
//     constructor(srs, alt, title, description, price, parentSelector, ...classes) {
//         this.srs = srs;
//         this.alt = alt;
//         this.title = title;
//         this.description = description;
//         this.price = price;
//         this.parentSelector = document.querySelector(parentSelector);
//         this.classes = classes;
//         this.transfer = 40;
//         this.changeToUAN();
//     }
//
//     changeToUAN() {
//         this.price = this.price * this.transfer;
//     }
//
//     render() {
//         const element = document.createElement('div');
//
//         if (this.classes.length <= 0) this.classes = ["someOtherClass", "menu__item"];
//         this.classes.forEach(className => element.classList.add(className));
//         element.innerHTML = `
//                     <img src=${this.srs} alt=${this.alt}>
//                     <h3 class="menu__item-subtitle">${this.title}</h3>
//                     <div class="menu__item-descr">${this.description} </div>
//                     <div class="menu__item-divider"></div>
//                     <div class="menu__item-price">
//                         <div class="menu__item-cost">Цена:</div>
//                         <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
//                     </div>
//             `;
//         this.parentSelector.append(element);
//     }
// }
//
// new MenuCard(
//     "img/tabs/vegy.jpg",
//     "vegy",
//     'Меню "Фитнес"',
//     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежиховощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценойи высоким качеством!',
//     333,
//     ".menu .container",
//     "menu__item"
// )
//     .render();
//

// //  FORM  FORM  FORM  FORM fetch
//
// const forms = document.querySelectorAll("form");
//
// const message = {
//     loading: 'img/form/spinner.svg',
//     success: "Thanks,we'll call you soon",
//     failure: "Some problem"
// }
//
// forms.forEach(form => {
//     postDataBind(form);
// })
//
//
// function postDataBind(form) {
//     form.addEventListener("submit", (event) => {
//         event.preventDefault();
//
//         const statusMessage = document.createElement("img");
//         statusMessage.src = message.loading;
//         statusMessage.style.cssText = `
//                 display: block;
//                 margin: 7px auto;
//             `;
//         form.insertAdjacentElement("afterend", statusMessage);
//
//         const formData = new FormData(form);
//
//         let obj = {};
//         formData.forEach((value, key) => {
//             obj[key] = value;
//         })
//
//             fetch("server.php", {   // fetch('https://jsonplaceholder.typicode.com/posts', {
//                 method: "POST",
//                 body: JSON.stringify(obj),
//                 headers: {
//                     'Content-type': 'application/json'
//                 }
//             })
//             .then((data) => data.json())
//             .then(response => {
//                 console.log(response);
//                 showThanksModal(message.success);
//                 statusMessage.remove();
//             })
//             .catch(() => {
//                 showThanksModal(message.failure);
//                 console.log(new Error("Down bro...error"))
//             })
//             .finally(() => { form.reset() });
//     });
// }

// function showThanksModal(message) {
//     const prevModalDialog = document.querySelector(".modal__dialog");
//
//     prevModalDialog.classList.add('hide');
//     openModal();
//
//     const thanksModal = document.createElement("div");
//     thanksModal.classList.add('modal__dialog');
//     thanksModal.innerHTML = `
//         <div class="modal__content">
//           <div class="modal__close" data-close>&times;</div>
//           <div class="modal__title">${message}</div>
//         </div>
//         `;
//     document.querySelector(".modal").append(thanksModal);
//
//     setTimeout(() => {
//         thanksModal.remove();
//         prevModalDialog.classList.add('show');
//         prevModalDialog.classList.remove('hide');
//         closeModal();
//     }, 4000)
// }


// AJAX requests

// 1)with  XMLHttpRequest()  (currency exchange usd->grn and grn->usd))


//document.addEventListener("DOMContentLoaded", () => {


    // convertor
    //
    //
    //
    // const inputUsd = document.querySelector("#usd"),
    //     inputGrn = document.querySelector("#grn");
    //
    // inputUsd.addEventListener("input", () => {
    //     const request = new XMLHttpRequest();
    //
    //     request.open("GET", "js/current.json");
    //     request.setRequestHeader("Content-type", "application/json; charset=utf-8");
    //     request.send();
    //
    //     request.addEventListener("load", () => {
    //         if (request.status === 200) {
    //             const data = JSON.parse(request.response);
    //             const dolPrice = data.current.usd;
    //             inputGrn.value = (+inputUsd.value * dolPrice).toFixed(2)
    //         } else {
    //             inputGrn.value = "Some problem"
    //         }
    //     })
    // })
    //
    // inputGrn.addEventListener("input", () => {
    //     const request = new XMLHttpRequest();
    //
    //     request.open("GET", "js/current.json");
    //     request.setRequestHeader("Content-type", "application/json; charset=utf-8");
    //     request.send();
    //
    //     request.addEventListener("load", () => {
    //         if (request.status === 200) {
    //             const data = JSON.parse(request.response);
    //             const gryvni = data.current.grn;
    //             inputUsd.value = (+inputGrn.value * gryvni).toFixed(2)
    //         } else {
    //             inputUsd.value = "Some problem"
    //         }
    //     })
    // })


    // // PROMISE  PROMISE (studying promises)
    //
    //
    // console.log("Data request...");
    //
    // const req = new Promise((resolve, reject) => {
    //     // setTimeout(() => {
    //     console.log("Preparation data ...");
    //
    //     const product = {
    //         name: "TV",
    //         price: 200
    //     }
    //     resolve(product);          //product = { name: "TV",price: 200 }
    //     //  }, 2000);
    // });
    //
    // req.then(data => {
    //         return new Promise((resolve, reject) => {
    //             setTimeout(() => {
    //                 data.modifity = true;
    //                 resolve(data);               // {name: 'TV', price: 200, modifity: true}
    //             }, 2000);
    //         })
    //     })
    //     .then((dataModifated) => {
    //         console.log(dataModifated);        // {name: 'TV', price: 200, modifity: true}
    //         dataModifated.mobile = true;
    //         return "33" ;      // just a joke ;-)
    //         // return dataModifated;
    //     })
    //     .then((data) => {
    //         console.log(data) // 33
    //          return data  // without return here will work .catch()
    //     })
    //     .then((data) => {
    //         console.log(data) // 33
    //     })
    //     .catch(() => {
    //         console.log(new Error("Error"));
    //     })
    //     .finally(() => {
    //
    //         console.log("Have a nice one !!!");
    //
    //     })
    //


    // // FETCH FETCH FETCH API REQUEST
    //
    //
    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: 'POST',
    //     body: JSON.stringify({name: "ggg", age: 22}),
    //     headers: {
    //         "Content-type": "application/json"
    //     }
    // })
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((json) => {
    //         console.log(json);
    //     })
    //     .catch(() => {
    //         console.log(new Error("Error"));
    //     })
    //     .finally(() => {
    //         console.log("Have a nice one !!!")
    //     })


    //  // convertor fetch
    // //
    //
    //  const inputUsd = document.querySelector("#usd"),
    //      inputGrn = document.querySelector("#grn");
    //
    //  inputUsd.addEventListener("input", () => {
    //          fetch("js/current.json")
    //              .then(responce => responce.json())
    //              .then(data =>{
    //                  const dolPrice = data.current.usd;
    //                  inputGrn.value = (+inputUsd.value * dolPrice).toFixed(2)
    //              })
    //              .catch(()=> inputGrn.value = "Some problem");
    //  })
    //  inputGrn.addEventListener("input", () => {
    //          fetch("js/current.json")
    //              .then(response => response.json())
    //              .then(currency => {
    //                  inputUsd.type = 'number'
    //                  const grnPrise = currency.current.grn;
    //                  inputUsd.value = (+inputGrn.value * grnPrise).toFixed(2)
    //              })
    //              .catch(() => {
    //                  inputUsd.type = 'text'
    //                  inputUsd.value =  new Error("Maaaaaann it's Errrrroorrr !!!") ;
    //                  console.log( new Error("Maaaaaann it's Errrrroorrr !!!"))
    //               })
    //              .finally(()=> "End" )
    //  })


    //  // practice  on fetch
    // //
    //
    //   // fetch('js/current.json')
    //   //    .then(response => response.json())
    //   //    .then(json=> {
    //   //        console.log(json)
    //   //    })
    //   //    .catch(()=>{
    //   //        console.log("ERROR");
    //   //    })


    // // // method  Object.entries(obj) // [ ['ivan', 'human'],['anna', 'human']  , ['cat', 'animal'] , ['dog', 'animal'] ]
    //
    // let obj = {
    //     ivan :"human",
    //     anna :"human",
    //     cat : "animal",
    //     dog : "animal"
    // }
    //
    // let newArr = Object.entries(obj)
    //    .filter(item => item[1] === "human")
    //     .map(item => item[0] )
    //     .map(item => item[0].toUpperCase() + item.substring(1))
    //
    // console.log(newArr)


    // fetch('http://localhost:3000/menu')
    //     .then(responce => responce.json() )
    //     .then(responce => console.log(responce ))


    //  // localStorage
    //  //
    //localStorage.setItem("name1","John")
    // localStorage.setItem("age1","13")
    //  // console.log(localStorage.getItem("name" ))
    //  // localStorage.removeItem("name" );
    //  // localStorage.clear();
    //  //
    // const in1put = document.querySelector("[name='name1']"),
    //      input2 = document.querySelector("[name ='age1']"),
    //      form1 = document.querySelector('.newF');
    // let users= new Map();
    //  //
    // form1.addEventListener("submit", ()=>{
    //      if (localStorage.getItem("name")==in1put.value && localStorage.getItem("age")==input2.value){
    //          alert("HELLO " + localStorage.getItem("name"))
    //      }else{
    //         localStorage.setItem(("name"),in1put.value)
    //          localStorage.setItem("age",input2.value)
    //      }
    //     for(let i = 0; i<10; i++){
    //          if (localStorage.key(i)===null)break;
    //          console.log( localStorage.key(i)  + " " + localStorage.getItem(localStorage.key(i)) );
    //
    //         users.set(localStorage.key(i) ,localStorage.getItem(localStorage.key(i)));
    //         console.log(users.entries());
    //         console.log(Object.fromEntries(users) );
    //      }
    //  })
    //  //
    //  for(let i = 0; i<10; i++){
    //      if (localStorage.key(i)===null)break
    //          users.set(   localStorage.key(i) ,localStorage.getItem(localStorage.key(i)));
    //  }
    //  console.log(Object.fromEntries(users) );
    //
    //  window.addEventListener("load",()=>{
    //      if (localStorage.getItem("name") ){
    //          alert("HELLO "+localStorage.getItem("name"));
    //      }
    //  })


    ////REgEx
    // function num (str){
    //     return Number(str.replace(/\D/ig,''))
    // }
    //
    // console.log(num("200px"))


    // //encapsulation
    // let obj = {
    //     name: "Alex",
    //     _age: 22,
    //
    //     get uAge() {
    //         return this._age
    //     },
    //     set uAge(num) {
    //         return this._age = num;
    //     }
    // }
    //    console.log(obj._age)
    //    console.log(obj._age = 32)
    //     console.log(obj.uAge = 34)
    //    console.log(obj)
    //
    // class User {
    //     #name
    //     constructor(name, age) {
    //
    //         this.#name = name;
    //     }
    //
    //     getName = () => {
    //         return this.#name;
    //     }
    //     setName = (name) => {
    //         this.#name = name;
    //     }
    // }
    //
    // let ira = new User("ira" );
    // console.log(ira)
    // ira.setName('Ara')
    // console.log(ira.getName())


//})