
async function weatherReport() {
    try {
        let city = document.getElementById('city').value;
        const apiKey = "e6e2889e584f310b770d8b838ae6b6dc";
        const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}`
        const response = await fetch(url + `&appid=${apiKey}`);
        var data = await response.json();
        if (response.ok) {
            const head = document.createElement('h3');
            let temp = document.createTextNode(`Temp : ${parseInt(data.main.temp)}`);
            head.appendChild(temp)
            document.getElementById('report').appendChild(head);
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

