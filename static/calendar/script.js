const arr = window.location.href.split('/')
const idField = arr[arr.length - 1]

// console.log(idField)

function createMonth(days) {
    let mont = []
    for (let i = 1; i <= days; i++) {
        mont.push({
            num: i
        })
    }
    return mont
}

let todayMonth = new Date()
document.querySelector('#today').innerHTML = `<p>${todayMonth.getDate()}.${todayMonth.getMonth() + 1}.${todayMonth.getFullYear()}</p>`
monthNumber = 1

let year = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
let yearMonthes = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']

year = year.map(e => createMonth(e))

document.querySelector('#select_month_left').addEventListener('click', function (e) {
    monthNumber -= 1
    console.log(monthNumber)
    if (monthNumber == 0) {
        monthNumber = 12
    }
    document.querySelector('#monthNumber').innerHTML = `<p>${yearMonthes[monthNumber - 1]}</p>`
    weather()
})

document.querySelector('#select_month_right').addEventListener('click', function (e) {
    monthNumber += 1
    if (monthNumber == 13) {
        monthNumber = 1
    }
    document.querySelector('#monthNumber').innerHTML = `<p>${yearMonthes[monthNumber - 1]}</p>`
    weather()
})

document.querySelector('#monthNumber').innerHTML = `<p>${yearMonthes[monthNumber - 1]}</p>`


function isDay(forecastDays, currDay, json) {
    if (forecastDays.includes(currDay)) {
        return (json[forecastDays.indexOf(currDay)])
    }
}

function coloring(temp) {
    if (temp > 0) {
        return 'green'
    } else if (temp == undefined) {
        return 'yellow'
    } else {
        return 'red'
    }
}


async function weather() {

    const res = await axios.get(`/api/${idField}`)
    console.log(res)
    let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast/?lat=${res.data.lat}&lon=${res.data.lon}&appid=40b20d92798d1783e7f0c753ead59df0`)
    let json = ''
    if (response.ok) {
        json = await response.json();
        let dates = json.list.map(e => {
            let curDay = new Date(e.dt * 1000)
            return curDay
        })
        let newDates = []
        let avgTemp = []
        let count = 0
        let summ = 0
        let todayWeather = []
        if (todayMonth.getMonth() + 1 == monthNumber) {
            for (let i = 0; i < dates.length - 1; i++) {
                count++
                summ += json.list[i].main.temp - 273
                if (dates[i].getDate() != dates[i + 1].getDate()) {
                    todayWeather.push(json.list[i].weather[0].main)
                    newDates.push(dates[i].getDate())
                    avgTemp.push(Math.round(summ / count))
                    count = 0
                    summ = 0
                }
            }
            if (dates[dates.length - 1] != dates[dates.length - 2]) {
                todayWeather.push(json.list[dates.length - 1].weather[0].main)
                newDates.push(dates[dates.length - 1].getDate())
                avgTemp.push(Math.round(json.list[dates.length - 1].main.temp - 273))
            }
        }
        console.log(avgTemp)
        console.log(newDates)
        document.querySelector('#calendar').innerHTML = year[monthNumber - 1].map(e => `<div style="background-color:${coloring(avgTemp[newDates.indexOf(e.num)])}" class="day"><div class="flex">${e.num}<div style="background-image: url('../../calendar/${todayWeather[newDates.indexOf(e.num)]}.png');width:20px;height:20px;background-size:contain;"></div></div><div class="temp">${isDay(newDates, e.num, avgTemp) != undefined ? avgTemp[newDates.indexOf(e.num)] + '°C' : ''}</div></div>`).join('')

    } else {
        alert("Ошибка HTTP: " + response.status);
    }
    return json
}

let jsonW = weather()
console.log(jsonW )