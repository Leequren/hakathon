const form = document.querySelector("#form")

form.addEventListener('submit', async function (event) {
    event.preventDefault()
    let data = {
        name: document.querySelector("#field").value,
        latitude: document.querySelector("#latitude").value,
        longitude: document.querySelector("#longitude").value,
        square: document.querySelector("#area").value,
        countCars: document.querySelector("#tech").value,
        countFert: document.querySelector("#fertilizer").value
    }

    const res = await axios.post('/personalArea/addField', data)

    if (res.data === 'DataSaved') {
        window.location.href = '/personalArea/fields'
    }
    console.log(res)
})