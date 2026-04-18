const apikey='';
const apiUrl='https://api.openweathermap.org/data/2.5/weather';
const locinput=document.getElementById("locationinput");
const searchb=document.getElementById("searchbtn");
const locele=document.getElementById("location");
const tempele=document.getElementById("temp");
const descele=document.getElementById('desc');

searchb.addEventListener("click", () => {
    const loc=locinput.ariaValueMax.trim();
    if(loc){
        fetchw(loc);
    }
});

function fetchw(location) {
    const url= `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(ur)
        .then(response => response.json())
        .then(data => {
            locele.textContent=data.name;
            tempele.textContent=`${Math.round(data.main.temp)}°C`;
            descele.textContent=data.weather[0].description;
        })
        .catch(error => {
            console.error('error fetching data',error);
        });
}