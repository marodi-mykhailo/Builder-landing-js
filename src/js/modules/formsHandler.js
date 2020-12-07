const formHandler = () => {

    const forms = document.querySelectorAll("form"),
        inputs = document.querySelectorAll("input"),
        phoneInputs = document.querySelectorAll('input[name="user_phone"]');

    const message = {
        loading: 'Загрузка...',
        success: "Спасибо! Скоро мы с вами свяжемся",
        failure: 'Что-то пошло не так...'
    }

    phoneInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, "");
        })
    })

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
    }

    forms.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);

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
                    }, 2000)
                })
        })
    })

}

export default formHandler;
