async function main() {
    const res = await axios('/api/user')
    let user = res.data.user
    console.log(user)
    document.querySelector('#info').innerHTML += `<p>${user.surname} ${user.name[0]}</p>`
    document.querySelector('#secondName').innerHTML += `<p class="pUser">${user.surname}</p>`
    document.querySelector('#firstName').innerHTML += `<p class="pUser">${user.name}</p>`
    document.querySelector('#email').innerHTML += `<p class="pUser">${user.email}</p>`
    document.querySelector('#phone').innerHTML += `<p class="pUser">${user.phone}</p>`
}

main()

// let user = {
//     fullName: 'ИВАНОВ П.С',
//     firstName: 'П',
//     secondName: 'ИВАНОВ',
//     phone: '123',
//     email: '123@123'
// }

