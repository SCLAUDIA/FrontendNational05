// Get Elements
const cityInput = document.getElementById('input');
const currentWeatherBtn = document.getElementById('currentWeatherBtn');
const prognozaBtn = document.getElementById('prognozaBtn');
const prognozaDiv = document.getElementById('prognozaDiv');
const URL_CURRENT_WEATHER =
    "https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";
const URL_FORECAST_WEATHER =
	"https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";

// console.log(input);


// Show Current Weather
currentWeatherBtn.addEventListener('click', showCurrentWeather);
function showCurrentWeather(e) {
    e.preventDefault();
    
	fetch (URL_CURRENT_WEATHER + input.value)
		.then((res) => {
			return res.json();
		})
		.then((data) => {console.log(data);
			let output = '';
			let imgURL = 'http://openweathermap.org/img/w/';
			output = `
            <div class="card">
                <h2>${data.name}</h2>
			    <p>${data.weather[0].description}</p>
			    <h3>${data.main.temp}<sup>&deg</sup>C</h3>
                <img src="${imgURL}${data.weather[0].icon}.png">
				<hr>
				<h4>Humidity: ${data.main.humidity}</h4>
				<h4>Pressure: ${data.main.pressure}</h4>
				<div class="container">
					<div class="details">
						<p>max</p>
						<span>${data.main.temp_max}<sup>&deg</sup></span>
					</div>
					<div class="details">
						<p>min</p>
						<span>${data.main.temp_min}<sup>&deg</sup></span>
					</div>
				</div>
            </div>
         	`;
		
		document.getElementById('outputCard').innerHTML += output ;
		});
}

// Show Forecast for 6 days
prognozaBtn.addEventListener('click', showForecast);
function showForecast() {
	let finalEndPoint = URL_FORECAST_WEATHER + input.value;

		fetch(finalEndPoint)
		.then((res) => res.json())
		.then((data) => {
			console.log(data.list[0].dt_txt.split(' ')[0]);
			console.log(data.list[0].dt_txt.split(' ')[1]);
			console.log(data.list[0].main.temp);
			console.log(data.list[0].weather[0].description);

			var numarDePrognozeZiuaCurenta = 0;
			for (let i = 0; i < data.list.length; i++) {
				if (
					data.list[i].dt_txt.split(' ')[0] !==
					data.list[i + 1].dt_txt.split(' ')[0]
				) {
					numarDePrognozeZiuaCurenta = i + 1;
					break;
				}
			}
			console.log(numarDePrognozeZiuaCurenta);
			prognozaDiv.innerHTML = '';
			createPrognozaBoxDiv(
				data,
				prognozaDiv,
				0,
				numarDePrognozeZiuaCurenta - 1
			);
			createPrognozaBoxDiv(
				data,
				prognozaDiv,
				numarDePrognozeZiuaCurenta,
				numarDePrognozeZiuaCurenta + 7
			);
			createPrognozaBoxDiv(
				data,
				prognozaDiv,
				numarDePrognozeZiuaCurenta + 8,
				numarDePrognozeZiuaCurenta + 15
			);
			createPrognozaBoxDiv(
				data,
				prognozaDiv,
				numarDePrognozeZiuaCurenta + 16,
				numarDePrognozeZiuaCurenta + 23
			);
			createPrognozaBoxDiv(
				data,
				prognozaDiv,
				numarDePrognozeZiuaCurenta + 24,
				numarDePrognozeZiuaCurenta + 31
			);
			createPrognozaBoxDiv(
				data,
				prognozaDiv,
				numarDePrognozeZiuaCurenta + 32,
				data.list.length - 1
			);
		});
}
function createPrognozaHoursOutput(day, hour, temp_max, temp_min, description, icon) {
	let imgURL = 'http://openweathermap.org/img/w/';
	let output = `
   <div class="prognozaHours">
      	<h5 class="date">${day}</h5>
      	<p class="hour"><i class="far fa-clock"></i> ${hour}</p>
		<img src="${imgURL}${icon}.png">
    	<div class="container forecast">
			<div class="details">
				<p>max</p>
				<span>${temp_max}<sup>&deg</sup></span>
			</div>
			<div class="details">
				<p>min</p>
				<span>${temp_min}<sup>&deg</sup></span>
			</div>
		</div>
      	<p class="desc">${description}</p>
   </div>
   `;
	return output;
}
function createPrognozaBoxDiv(data, divElement, startIndex, endIndex) {
	let prognozaBox = document.createElement('div');
	prognozaBox.classList.add('prognozaBox');
	for (let i = startIndex; i <= endIndex; i++) {
		prognozaBox.innerHTML += createPrognozaHoursOutput(
			data.list[i].dt_txt.split(' ')[0],
			data.list[i].dt_txt.split(' ')[1],
			data.list[i].main.temp_min,
			data.list[i].main.temp_max,
			data.list[i].weather[0].description,
			data.list[i].weather[0].icon
		);
	}
	divElement.appendChild(prognozaBox);
}