let baseURL='http://numbersapi.com'

async function favNumber() {
    const num = $('#fav')[0].value
    const list = $('#factList')
    list.empty()
    let promise1 = axios.get(`${baseURL}/${num}?json`)
    let promise2 = axios.get(`${baseURL}/${num}?json`)
    let promise3 = axios.get(`${baseURL}/${num}?json`)
    let promise4 = axios.get(`${baseURL}/${num}?json`)
    let data1 = await promise1
    let data2 = await promise2
    let data3 = await promise3
    let data4 = await promise4
    list.append(`<li>${data1.data.text}</li>`)
    list.append(`<li>${data2.data.text}</li>`)
    list.append(`<li>${data3.data.text}</li>`)
    list.append(`<li>${data4.data.text}</li>`)
}

async function fav4Numbers() {
    const num = $('#fav1')[0].value
    const num2 = $('#fav2')[0].value
    const num3 = $('#fav3')[0].value
    const num4 = $('#fav4')[0].value
    const list = $('#factList4')
    list.empty()
    let promise1 = axios.get(`${baseURL}/${num}?json`)
    let promise2 = axios.get(`${baseURL}/${num2}?json`)
    let promise3 = axios.get(`${baseURL}/${num3}?json`)
    let promise4 = axios.get(`${baseURL}/${num4}?json`)
    let data1 = await promise1
    let data2 = await promise2
    let data3 = await promise3
    let data4 = await promise4
    list.append(`<li>${data1.data.text}</li>`)
    list.append(`<li>${data2.data.text}</li>`)
    list.append(`<li>${data3.data.text}</li>`)
    list.append(`<li>${data4.data.text}</li>`)
}