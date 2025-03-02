let temp = document.getElementById('temp');
let maxTemp = document.getElementById('max-temp');
let minTemp = document.getElementById('min-temp');
let humid = document.getElementById('humid');
let cityName = document.getElementById('city-name');

async function weatherReport() {
    try {
        let city = document.getElementById('city').value;
        const apiKey = "e6e2889e584f310b770d8b838ae6b6dc";
        const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}`
        const response = await fetch(url + `&appid=${apiKey}`);
        var data = await response.json();
        if (response.ok) {
            cityName.innerHTML = `<h2>${data.name}</h2>`
            temp.innerHTML = `<h4>Temp : ${parseInt(data.main.temp)}<sup>o</sup>C</h4>`
            maxTemp.innerHTML = `<h4>Max. Temp : ${parseInt(data.main.temp_max)}<sup>o</sup>C</h4>`
            minTemp.innerHTML = `<h4>Min. Temp : ${parseInt(data.main.temp_min)}<sup>o</sup>C</h4>`
            humid.innerHTML = `<h4>Humidity : ${parseInt(data.main.humidity)}<sup>o</sup>C</h4>`
        }
        else {
            city = '';
            alert("Invalid City name");
        }
    }
    catch (e) {
        alert(e);
    }
}

document.getElementById('reset').addEventListener('click',() => {
    window.location.reload();
})
