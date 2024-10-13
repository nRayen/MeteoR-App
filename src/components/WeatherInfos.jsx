const WeatherInfos = ({currentData}) => {

	let ressenti = Math.round(currentData.feelslike)
	let humidity = currentData.humidity
	let wind_speed = Math.round(currentData.windspeed)
	let visibility = currentData.visibility

	return (
		<section className="weather-info">
			<article className="card glass">
				<h3 className="glass-text">Vent</h3>
					<p>{wind_speed} km/h</p>
			</article>

			<article className="card glass">
				<h3 className="glass-text">Humidité</h3>
					<p>{humidity}%</p>
			</article>

			<article className="card glass">
				<h3 className="glass-text">Ressenti</h3>
					<p>{ressenti}°C</p>
			</article>

			<article className="card glass">
				<h3 className="glass-text">Visibilité</h3>
					<p>{visibility}km</p>
			</article>


		</section>
	);
};

export default WeatherInfos;
