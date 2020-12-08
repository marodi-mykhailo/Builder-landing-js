import checkNumInputs from "./checkNumInputs";

const formHandler = (state) => {

    const forms = document.querySelectorAll("form"),
        inputs = document.querySelectorAll("input"),
        modal = document.querySelector('.popup_calc_end');

    checkNumInputs('input[name="user_phone"]');

    const message = {
        loading: 'Загрузка...',
        success: "Спасибо! Скоро мы с вами свяжемся",
        failure: 'Что-то пошло не так...'
    }

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: 'POST',
            body: data
        })

        return await res.text();
    }

    const resetInputs = () => {
        inputs.forEach(item => {
            item.value = "";
        })
        for (let key in state) {
            delete state[key]
        }
    }

    forms.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            if (item.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }


            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res)
                    statusMessage.textContent = message.success;
                })
                .catch(() => {
                    statusMessage.textContent = message.failure;
                })
                .finally(() => {
                    resetInputs()
                    setTimeout(() => {
                        statusMessage.remove()
                        modal.style.display = "none";
                    }, 2000)
                })
        })
    })

}

export default formHandler;
