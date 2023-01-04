const api = {
    key : "bfb4401174754f17be6132402230301",
    base: "http://api.weatherapi.com/v1/current.json?key="
   
}
const searchBox = document.querySelector(".search-box")


searchBox.addEventListener('keypress' , setQuery)

function setQuery(event){
    if (event.keyCode == 13) {
       getResults(searchBox.value)
    }
}

function getResults(value) {
    fetch(`http://api.weatherapi.com/v1/current.json?key=${api.key}&q=${value}&aqi=no`)
    .then(weather =>{
        return weather.json()
    }).then(displayResults)
}

function displayResults(weather){
    console.log(weather);
    let city = document.querySelector(".city")
    let date = document.querySelector(".date")
    let temp = document.querySelector(".temp")
    let condition = document.querySelector(".style")
    let fahrenheit = document.querySelector(".fahrenheit")
    city.innerText = `${weather.location.name},${weather.location.country}`
    date.innerText = `${weather.location.localtime}`
    temp.innerText = `${weather.current.temp_c}°C`
    condition.innerText = `${weather.current.condition.text}`
    fahrenheit.innerText = `${weather.current.temp_f}°F`

}