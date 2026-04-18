const apiUrl = "/weather";

const iconEle = document.getElementById("weatherIcon");
const locinput = document.getElementById("locationinput");
const searchb = document.getElementById("searchbtn");
const locele = document.getElementById("location");
const tempele = document.getElementById("temp");
const descele = document.getElementById("desc");

searchb.addEventListener("click", () => {
    const loc = locinput.value.trim();
    if (loc) {
        fetchw(loc);
    }
});

function fetchw(location) {
    const url = `${apiUrl}?city=${location}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                locele.textContent = "City not found";
                tempele.textContent = "";
                descele.textContent = "";
                iconEle.style.display = "none";
                return;
            }

            locele.textContent = data.name;
            tempele.textContent = `${Math.round(data.main.temp)}°C`;
            descele.textContent = data.weather[0].description;

            const icon = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${icon}.png`;

            iconEle.src = iconUrl;
            iconEle.style.display = "block";
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            locele.textContent = "Error fetching data";
            tempele.textContent = "";
            descele.textContent = "";
            iconEle.style.display = "none";
        });
}