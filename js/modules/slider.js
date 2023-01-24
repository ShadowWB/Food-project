 import {getZero} from "./functions" ;

 function slider({container, allSlides, nextArrow, prewArrow, totalCounter, currentCounter, wrapper, field}){
     const slider = document.querySelector(container),
         slides = document.querySelectorAll(allSlides),
         currentCounterSlide = document.querySelector(currentCounter),
         totalCountSlides = document.querySelector(totalCounter),
         prevBtn = document.querySelector(prewArrow),
         nextBtn = document.querySelector(nextArrow),
         sliderWrapper = document.querySelector(wrapper),
         sliderField = document.querySelector(field);
     let widthWindow = window.getComputedStyle(sliderWrapper).width,
        slideIndex = 1,
        offSet = 0;

    widthWindow = +widthWindow.slice(0, widthWindow.length - 2); // removing "px"

    totalCountSlides.textContent = getZero(slides.length);
    currentCounterSlide.textContent = getZero(slideIndex);

    offSet = +widthWindow * (slideIndex - 1);
    sliderField.style.transform = `translateX(-${offSet}px)`;

    sliderField.style.width = 100 * slides.length + "%";
    sliderField.style.display = "flex";
    sliderField.style.transition = ".5s all";

    sliderWrapper.style.overflow = "hidden";

    prevBtn.addEventListener("click", changeForPrewSlide);
    nextBtn.addEventListener("click", changeForNextSlide);
     sliderWrapper.addEventListener("click", changeForNextSlide);

    slider.style.position = "relative";
    const indicators = document.createElement("ol"),
        dots = [];
    indicators.classList.add('carousel__indicators');
    indicators.style.cssText = `
           position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
    `;
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement("il");
        dot.setAttribute("data-slide-to", i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
           transition: opacity .6s ease;
        `;
        indicators.append(dot);

        dots.push(dot);

        if (i === slideIndex - 1) dot.style.opacity = 1;
    }
    function changeForPrewSlide() {
        if (offSet === 0) {
            offSet = +widthWindow * (slides.length - 1);
            slideIndex = slides.length;
        } else {
            offSet -= widthWindow;
            slideIndex -= 1;
        }
        moveSlide();
        setActiveDot();
    }
    function changeForNextSlide() {
        if (offSet == widthWindow * (slides.length - 1)) {
            offSet = 0;
            slideIndex = 1;
        } else {
            offSet += widthWindow;
            slideIndex += 1;
        }
        moveSlide()
        setActiveDot();
    }
    dots.forEach(dot => {
        dot.addEventListener("click",(e)=>{
            const slideTo = e.target.getAttribute("data-slide-to");
            slideIndex = +slideTo;
            offSet = +widthWindow * (slideTo - 1);

            moveSlide();
            setActiveDot();
        })
    });

    function moveSlide(){
        sliderField.style.transform = `translateX(-${offSet}px)`;
        currentCounterSlide.textContent = getZero(slideIndex);
    }
    function setActiveDot(){
        dots.forEach(dot => {
            dot.style.opacity = 0.5;
        });
        dots[slideIndex-1].style.opacity = 1;
    }

    window.addEventListener("resize", (e) => {
        widthWindow = window.getComputedStyle(sliderWrapper).width;
        widthWindow = +widthWindow.slice(0, widthWindow.length - 2);
        offSet = window.getComputedStyle(sliderWrapper).width;
        offSet = +offSet.slice(0, offSet.length - 2);
        sliderField.style.width = 100 * slides.length + "%";
    });

}

export default slider;