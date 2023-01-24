  export  function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        }
        return num;
    }

   // export function openModal() {
   //      modal.classList.add("show");
   //      modal.classList.remove("hide");
   //      document.body.style.overflow = "hidden";
   //      clearTimeout(modalTimerId);
   //  }
   //
   // export  function closeModal() {
   //      modal.classList.add("hide");
   //      modal.classList.remove("show");
   //      document.body.style.overflow = "";
   //      window.removeEventListener("scroll", showModalByScroll);
   //  }
