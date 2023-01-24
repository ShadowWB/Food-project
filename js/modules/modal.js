
function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
}

function openModal(modalSelector,modalTimerId) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    console.log(modalTimerId)
    if(modalTimerId){
        clearTimeout( modalTimerId);
    }
}

function modal (modalSelector,triggerSelector,modalTimerId){
    const modal = document.querySelector(modalSelector),
        modalTriggers = document.querySelectorAll(triggerSelector);

    modalTriggers.forEach((btn) => {
        btn.addEventListener("click",()=> openModal(modalSelector,modalTimerId));
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') === '') {
            closeModal(modalSelector)
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.code === "Escape" && modal.classList.contains("show")) closeModal(modalSelector);
    });

    function showModalByScroll() {
        if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal(modalSelector,modalTimerId);
            window.removeEventListener("scroll", showModalByScroll);
        }
    }
    window.addEventListener("scroll", showModalByScroll);
}

export {openModal,closeModal};
export default modal;
