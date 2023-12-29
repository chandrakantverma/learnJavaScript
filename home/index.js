console.log('This is my new javascript project')

const API_KEY = 'f6f6f0d1b0569b0f6681bab1cf92fa0a';
let API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid={API_KEY}'

async function geWeatherDetails(){

    let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=pune'+`&appid=${API_KEY}`);
    let responseJson = await response.json();
    document.querySelector(".city").innerHTML = responseJson.name;
    document.querySelector(".temp").innerHTML = responseJson.main.temp;
    //document.querySelector(".temp").innerHTML = responseJson.main.temp;

}
geWeatherDetails();