const API_KEY = `862ae157c64fffc7529a97facc4d17b2`;
const searchTemperature = () =>{
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayTempareTure(data))

};
const SetinnerTex =(id, text )=>{
    document.getElementById(id).innerText =text;
};
const displayTempareTure = temparature =>{
    SetinnerTex('city',temparature.name);
    SetinnerTex('temperature',temparature.main.temp);
    SetinnerTex('condition',temparature.weather[0].main);
    
    // set weather icon
    const url =` http://openweathermap.org/img/wn/${temparature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}