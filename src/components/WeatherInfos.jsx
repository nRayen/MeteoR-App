const WeatherInfos = ({data}) => {

	let ressenti = Math.round(data.main.feels_like)
	let humidity = data.main.humidity
	let wind_speed = Math.round(data.wind.speed * 3.6)
	let visibility = data.visibility / 1000

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
