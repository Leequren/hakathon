let formS = document.querySelector('#form')

formS.addEventListener('submit', async function (e) {

    e.preventDefault()
    let a = document.querySelectorAll('input[name="type"]')
    let type = ''
    for (let i of a) {
        if (i.checked) {
            type = i.defaultValue
        }
    }

    let data = {
        type: type,
        email: document.querySelector('#email').value,
        password: document.querySelector('#password').value
    }

    console.log(data)

    const res = await axios.post('/login', {
        data
    })
    console.log(res)
    if (res.data === 'PasswordNotValid') {
        document.querySelector('#alert').innerHTML = '<p class="red">Неверный логин или пароль</p>'
    }
    if (res.data === 'AccessIsOpen') {
        console.log('AccessIsOpen')
        window.location.href = "/personalArea"
    }
})