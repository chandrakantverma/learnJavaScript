console.log('This is my new javascript project')

const API_KEY = 'f6f6f0d1b0569b0f6681bab1cf92fa0a';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q='
const searchBox =  document.querySelector(".search input")
const searchBtn =  document.querySelector(".search button")

async function geWeatherDetails(city){

    let response = await fetch(API_URL+city+`&appid=${API_KEY}`);
    let responseJson = await response.json();
    console.log(responseJson);
    document.querySelector(".city").innerHTML = responseJson.name;
    document.querySelector(".temp").innerHTML = (responseJson.main.temp-273).toFixed(2)+ "°C";
    document.querySelector(".humidity").innerHTML = responseJson.main.humidity+" %";
    document.querySelector(".wind").innerHTML = responseJson.wind.speed + " Km/h";
    //document.querySelector(".temp").innerHTML = responseJson.main.temp;

}
searchBtn.addEventListener("click",()=>{
    geWeatherDetails(searchBox.value);
})
