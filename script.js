let weather = {
        "apikey":'20c288b6da50d883b86e3411fd6eb2fd',
        fetchWeather (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city +"&units=metric&lang=sp&appid=" + this.apikey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },

    displayWeather(data) {
        const {name} = data;
        const {icon,description} = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".ciudad").innerText = "El clima en " + name;
        document.querySelector(".temperatura").innerText = temp + " °C";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+icon+".png";        
        document.querySelector(".descripcion").innerText = description;
        document.querySelector(".humedad").innerText = "Humedad: " + humidity +"%";
        document.querySelector(".viento").innerText = "La velocidad del viento:" + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading")
    },
    
    search() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".buscar button").addEventListener("click", function() {
    weather.search();
}),
document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if (event.key == "Enter"){
        weather.search();
    }
});

weather.fetchWeather("rio cuarto")