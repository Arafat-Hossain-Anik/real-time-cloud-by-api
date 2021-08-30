const defaultUrl = `https://api.openweathermap.org/data/2.5/weather?q=Patuakhali&appid=778c2dc12187deca51c4ae0994bbab86`;
const showWeather = () => {
    const searchField = document.getElementById('search-field');
    const cityName = searchField.value;
    // const cityName = 'Dhaka';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=778c2dc12187deca51c4ae0994bbab86`;
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
    const tempCelcius = (temp - 273.15).toFixed(2);
    const tempSpan = document.getElementById('temparature');
    const cityNameHeader = document.getElementById('city-name');
    const weatherMode = document.getElementById('weather-mode');
    tempSpan.innerText = tempCelcius;
    cityNameHeader.innerText = data.name;
    const weatherMain = data.weather[0].main;
    weatherMode.innerText = weatherMain;
    console.log(tempCelcius);
}