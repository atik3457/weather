const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', () => {
    let cityName = document.getElementById('city-input').value;
    document.getElementById('city-display').innerText = cityName;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=b61f87c2a08a1be5b3e1a5a5e5cb6f61`)
        .then(res => res.json())
        .then(data => informationShow(data.main, data.weather))
        .catch(err => alert('Sorry Maybe Spelling Wrong or The City Is Not Available In Our List Please Try Another City'));

})

informationShow = (main, weather, icon) => {
    console.log(weather[0].description)
    document.getElementById('temp').innerText = `${main.temp}°C`;
    document.getElementById('cloud-dec').innerText = weather[0].description;
    document.getElementById('cloud-icon').src = `https://openweathermap.org/img/w/${weather[0].icon}.png`;
}