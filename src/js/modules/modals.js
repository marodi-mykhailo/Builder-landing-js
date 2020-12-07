const modals = () => {
    function bindModal(triggerSellector, modalSellector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSellector),
            modal = document.querySelector(modalSellector),
            close = document.querySelector(closeSelector)

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                modal.style.display = "block";
                document.body.classList.add('modal-open')
                // document.body.style.overflow = "hidden";
            });
        });

        close.addEventListener('click', () => {
            modal.style.display = "none";
            document.body.classList.remove('modal-open')
            // document.body.style.overflow = "";
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
                document.body.classList.remove('modal-open')
                // document.body.style.overflow = "";
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(function () {
            document.querySelector(selector).style.display = "block";
            document.body.classList.remove('modal-open')
        }, time);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    showModalByTime('.popup', 3000)

};
export default modals;
