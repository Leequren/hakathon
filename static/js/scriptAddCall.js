const form = document.querySelector('#form')

form.addEventListener('submit', async (event) => {
    event.preventDefault()

    let data = {
        emailWorker: document.querySelector('#email').value,
        idField: document.querySelector('#idField').value,
        description: document.querySelector('#info').value,
        date: document.querySelector('#date').value
    }

    const res = await axios.post('/personalArea/addCall', data)
    console.log(res)
    if(res.data === 'CallInserted'){
        window.location.href = '/personalArea/calls'
    }
})