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
    const url=
}