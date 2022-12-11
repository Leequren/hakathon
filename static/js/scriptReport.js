let formS = document.querySelector('#form')


formS.addEventListener('submit', async function(e) {

    e.preventDefault()

    let data = {
        reason: document.querySelector('#reason').value,
        text: document.querySelector('#textarea').value
    }

    console.log(data)

    const res = await axios.post('/login', {
        data
    })
})