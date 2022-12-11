console.log(axios)

let formS = document.querySelector('#form')

document.querySelector('#phone').addEventListener('input', function (e) {
    if (this.value == 8 || this.value == 7) {
        this.value = '+7'
    } else if (this.value == 9) {
        this.value = '+79'
    } else if (this.value.length > 12) {
        document.querySelector('#alert').innerHTML = '<p class="red">Слишком длинный номер телефона!</p>'
    } else if (this.value.length < 12) {
        document.querySelector('#alert').innerHTML = '<p class="red">Слишком короткий номер телефона!</p>'
    } else {
        document.querySelector('#alert').innerHTML = ''
    }
})

formS.addEventListener('submit', async function (e) {

    e.preventDefault()
    let a = document.querySelectorAll('input[name="type"]')
    let type = ''
    for (let i of a) {
        if (i.checked) {
            type = i.defaultValue
        }
    }

    let pass1 = document.querySelector('#password').value
    let pass2 = document.querySelector('#repeatPassword').value

    if (pass1.length < 6) {
        document.querySelector('#alert').innerHTML = '<p class="red">Пароль Слишком короткий!</p>'
    } else if (pass1 != pass2) {
        document.querySelector('#alert').innerHTML = '<p class="red">Пароли не совпадают!</p>'
    } else {
        document.querySelector('#alert').innerHTML = ''
        let data = {
            type: type,
            firstName: document.querySelector('#firstName').value,
            secondName: document.querySelector('#secondName').value,
            lastName: document.querySelector('#lastName').value,
            phone: document.querySelector('#phone').value,
            email: document.querySelector('#email').value,
            password: document.querySelector('#password').value
        }

        console.log(data)

        const res = await axios.post('/register', {
            data
        })
        const message = res.data.message
        console.log(message)
        if (message === 'RegisterWasSuccess') {
            window.location.href = '/personalArea'
        } else if (message === 'UserInDBAlready') {
            document.querySelector('#alert').innerHTML = '<p class="red">Такая почта уже зарегистрирована</p>'
        }
        console.log(res)

    }
})

