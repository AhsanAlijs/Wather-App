const form = document.getElementById('form');
const searchInput = document.getElementById('search');
const div = document.getElementById('data');
const load = document.querySelector('.load')
const found = document.querySelector('.errors')

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    // div.innerHTML = ""
    found.innerHTML=''
    load.style.display = 'block'
    let searchValue = searchInput.value;
    try {
        const res = await axios.get(`https://api.weatherapi.com/v1/current.json?key=339c612e69db487da81155228231610&q=${searchValue}`)
        const data = res.data;
        console.log(data);
        div.innerHTML += `<div class="main-content">
            <h2 class="h-name">${data.location.name}</h2>
            <p class="time">${data.location.localtime} , ${data.location.country}</p>
            <div class="c-data">
            <div class="c-text"><p>${data.current.temp_c}<sup>o</sup>C</p></div>
            <div class="c-icon"><img src="${data.current.condition.icon}"class="image-icon"></div>
            </div>
            <p class="c-last">${data.current.condition.text}</p>
            </div>`
    } catch (error) {
        found.innerHTML = `<h2 class="error">Not City Found</h2>`
    } finally {
        load.style.display = 'none'
        searchInput.value = ''
    }
});


// form.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     div.innerHTML+=''
//     let searchValue = searchInput.value;
//     try {
//         const res = await axios.get(`https://api.weatherapi.com/v1/current.json?key=339c612e69db487da81155228231610&q=${searchValue}`)
//         const data = res.data;
//         console.log(data);
//         div.innerHTML += `<div class="main-content">
//     <h2 class="h-name">${data.location.name}</h2>
//     <p class="time">${data.location.localtime} , ${data.location.country}</p>
//     <div class="c-data">
//     <div class="c-text"><p>${data.current.temp_c}<sup>o</sup>C</p></div>
//     <div class="c-icon"><img src="${data.current.condition.icon}"class="image-icon"></div>
//     </div>
//     <p class="c-last">${data.current.condition.text}</p>
//     </div>`
//     } catch (error) {
//        alert('54545454454')
//     } finally {

//         searchInput.value = ''

//     }
// });
// .then((res) => {
//     const data = res.data;
//     // console.log(data);
//     // console.log(data.location.name);
//     // console.log(data.location.country);
//     // console.log(data.location.localtime);
//     // console.log(data.location.region);
//     // console.log(data.current.cloud);
//     // console.log(data.current.condition.text);
//     div.innerHTML += `<div class="main-content">
//     <h2 class="h-name">${data.location.name}</h2>
//     <p class="time">${data.location.localtime} , ${data.location.country}</p>
//     <div class="c-data">
//     <div class="c-text"><p>${data.current.temp_c}<sup>o</sup>C</p></div>
//     <div class="c-icon"><img src="${data.current.condition.icon}"class="image-icon"></div>
//     </div>
//     <p class="c-last">${data.current.condition.text}</p>
//     </div>`
//     searchInput.value = ""
// }).catch((error) => {
//     errors.innerHTML=`
//     <h3 class='error'>City Or Country Not Found</h3>
//     `
// })


