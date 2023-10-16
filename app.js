const form = document.getElementById('form');
const searchInput = document.getElementById('search');
const div = document.getElementById('data');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let searchValue = searchInput.value;

    const data = axios.get(`http://api.weatherapi.com/v1/current.json?key=b4db485d7c4c485fa6d84351232508&q=${searchValue}`)
        .then((res) => {
            const data = res.data;
            console.log(data);
            console.log(data.location.name);
            console.log(data.location.country);
            console.log(data.location.localtime);
            console.log(data.location.region);
            console.log(data.current.cloud);
            console.log(data.condition.text);
        }).catch((error) => {
            console.error("Error:", error);
        })
});




