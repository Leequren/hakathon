let formS = document.querySelector('#form')

let options = [1,2,3]

console.log(options.map(e => `<option>${e}</option>`))
document.querySelector('#field').innerHTML = options.map(e => `<option>${e}</option>`)


formS.addEventListener('submit', async function(e) {

    e.preventDefault()

    let data = {
        field: document.querySelector('#field').value,
        technicalDirective: document.querySelector('#textarea').value
    }

    console.log(data)

    const res = await axios.post('/login', {
        data
    })
})