import React from 'react'
import WeatherIcon from './WeatherIcon';

const DayHourlyPreviewDesktop = ({forecastData, index}) => {

	let jours = ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."]

	let timeDiff = forecastData.city.timezone / 3600

	const today = new Date();
	today.setDate(today.getDate() + index)
	let day = today.toISOString().split('T')[0]
	console.log(day)


	let weatherHourList = forecastData.list.filter((hour) => hour.dt_txt.split(' ')[0] == day )
  return (
	  <div className="day">
					<p>{index == 0 ? "Auj." : jours[today.getDay()]}</p>

					<div className="hours">
					{weatherHourList.map((hour, index) => {
						let h = (parseInt(hour.dt_txt.split(' ')[1].slice(0,2)) + timeDiff).toString().padStart(2, '0')

						return (
						<div className="h" key={index}>
							<h4>{h}h</h4>
							<WeatherIcon code={hour.weather[0].icon}/>
							<p>{Math.round(hour.main.temp)}°</p>
						</div>
						)
					})}
					</div>
				</div>
  )
}

export default DayHourlyPreviewDesktop