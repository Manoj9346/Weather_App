const apiKey="857e23d1682891a2428f17e8fd4379ea";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon")

async function checkWeather(city){
    const response=await fetch(apiUrl + city +`&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data=await response.json();
   
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed +" km/h";
        
        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="https://cdn-icons-png.flaticon.com/512/7133/7133364.png";
        }
       else if(data.weather[0].main=="Clear"){
            weatherIcon.src="https://static.vecteezy.com/system/resources/thumbnails/010/989/531/small_2x/hot-weather-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.png";
            
        }
       else if(data.weather[0].main=="Rain"){
            weatherIcon.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc9UbZtid2SzdzKrLbOW8EHMDLnpMTUTFvQw&s";
            
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOGggL7waMUiVt8_tk1rIRBFjO41xYvZviDA&s";
            
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="https://c8.alamy.com/comp/2E947FX/foggy-weather-icon-outline-foggy-weather-vector-icon-for-web-design-isolated-on-white-background-2E947FX.jpg";
            
        }
    
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    
    
    }
    
}    
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
