import {openModal, closeModal} from './modal';
import {postData} from '../services/services'

function forms(formSelector,modalTimerId) {

    const forms = document.querySelectorAll(formSelector),
        modal = document.querySelector(".modal"),
        message = {
            loading: 'img/form/spinner.svg',
            success: "Thanks,we'll call you soon",
            failure: "Some problem"
        };

    forms.forEach(form => {
        postDataBind(form);
    });

    function postDataBind(form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const statusMessage = document.createElement("img");
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 7px auto;
            `;
            form.insertAdjacentElement("afterend", statusMessage);

            const formData = new FormData(form);
            formData.set("data", new Date()); // nice )
            //                         json          {}        [ ['name','value'],['name','value'] ]
            const jsonFormData = JSON.stringify(Object.fromEntries(formData.entries()));

            postData("http://localhost:3000/requests", jsonFormData)
                .then(response => {
                    console.log(response );
                    showThanksModal(message.success);
                    statusMessage.remove();
                })
                .catch((e) => {
                    console.log(e.stack)
                    showThanksModal(message.failure);
                })
                .finally(() => {
                    form.reset()
                });
        });
    }

//
    function showThanksModal(message) {
        const prevModalDialog = document.querySelector(".modal__dialog");

        prevModalDialog.classList.add('hide');
        openModal(".modal",modalTimerId);

        const thanksModal = document.createElement("div");
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
        <div class="modal__content">
          <div class="modal__close" data-close>&times;</div>
          <div class="modal__title">${message}</div>
        </div>
        `;
        document.querySelector(".modal").append(thanksModal);

        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal(".modal");
        }, 4000)
    }
}

export default forms;