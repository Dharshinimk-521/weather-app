const apikey='9d76e15c5e2f3128f1e887514771a75d';
const apiUrl='https://api.openweathermap.org/data/2.5/weather';
const locinput=document.getElementById("locationinput");
const searchb=document.getElementById("searchbtn");
const locele=document.getElementById("location");
const tempele=document.getElementById("temp");
const descele=document.getElementById('desc');

searchb.addEventListener("click", () => {
    const loc=locinput.value;
    if(loc){
        fetchw(loc);
    }
});

function fetchw(location) {
    const url= `${apiUrl}?q=${location}&appid=${apikey}&units=metric`;

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