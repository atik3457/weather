const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', () => {
    let cityName = document.getElementById('city-input').value;
    document.getElementById('city-display').innerText = cityName;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=b61f87c2a08a1be5b3e1a5a5e5cb6f61`)
        .then(res => res.json())
        .then(data => informationShow(data.main))
        .catch(err => alert('sorry maybe spelling wrong or the city is not available in our list'));
})

informationShow = (temperature) => {
    console.log(temperature.temp)
    document.getElementById('temp').innerText = temperature.temp;
}