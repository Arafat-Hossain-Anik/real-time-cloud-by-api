const defaultUrl = `https://api.openweathermap.org/data/2.5/weather?q=Patuakhali&appid=${apiCode}&units=metric`;
const showWeather = () => {
    const searchField = document.getElementById('search-field');
    const cityName = searchField.value;
    // const cityName = 'Dhaka';
    const apiCode = ``;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiCode}&units=metric`;
    searchField.value = '';
    fetchingData(url);
}
const fetchingData = async (url) => {
    const res = await fetch(url)
    const data = await res.json();
    displyData(data);
}
// default value 
fetchingData(defaultUrl);
console.log(defaultUrl);//default value ends here

function displyData(data) {
    console.log(data);
    const temp = data.main.temp;
    // const temp = (temp - 273.15).toFixed(2);
    const tempSpan = document.getElementById('temparature');
    const cityNameHeader = document.getElementById('city-name');
    const weatherMode = document.getElementById('weather-mode');
    tempSpan.innerText = temp;
    cityNameHeader.innerText = data.name;
    const weatherMain = data.weather[0].main;
    weatherMode.innerText = weatherMain;
    console.log(temp);
    // set weather icon
    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.setAttribute('src', iconUrl);
}