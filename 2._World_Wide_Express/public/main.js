const url = `http://api.weatherstack.com/current?access_key=361bbf753b816d01b117fffca0e5ed2b&query=Copenhagen`
        const currentTemp = document.querySelector(".current-temp");

        async function getWeather() {
            const resp = await fetch(url);
            const respData = await resp.json();

            console.log(respData)

            currentTemp.innerHTML = `${respData.current.temperature} °C`

        }

        getWeather();