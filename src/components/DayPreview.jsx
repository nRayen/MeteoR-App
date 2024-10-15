import React from 'react'
import NuageuxSVG from './svg/NuageuxSVG'
import WeatherIcon from './WeatherIcon';

const DayPreview = ({index, forecastData}) => {

	let jours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
	const today = new Date();
	today.setDate(today.getDate() + index)
    let day = today.toISOString().split('T')[0]

    let weatherHourList = forecastData.list.filter((hour) => hour.dt_txt.split(' ')[0] == day )
    let minWeather = Math.round(Math.min(...weatherHourList.map((data) => data.main.temp)));
    let maxWeather = Math.round(Math.max(...weatherHourList.map((data) => data.main.temp)));


    let occurrences = weatherHourList.reduce((acc, hour) => {
        acc[hour.weather[0].icon] = (acc[hour.weather[0].icon] || 0) + 1;
        return acc;
      }, {});

      // Étape 2: Trouver la valeur avec le plus grand nombre d'occurrences
      let moyIcon = Object.keys(occurrences).reduce((a, b) =>
        occurrences[a] > occurrences[b] ? a : b
      );

  return (
    <div className="day">
        <h4>{jours[today.getDay()]}</h4>
        <WeatherIcon code={moyIcon}/>
        <div className="temp">
            <span className="min">{minWeather}°</span>
            <span className="max">{maxWeather}°</span>
        </div>
    </div>
  )
}

export default DayPreview