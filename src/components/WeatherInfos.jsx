import Image from "next/image";

const WeatherInfos = () => {
	return (
		<section className="weather-info">
			<article className="card glass">
				<h3 className="glass-text">Qualité de l'air</h3>
					<p>Moyenne</p>
			</article>

			<article className="card glass">
				<h3 className="glass-text">Humidité</h3>
					<p>10%</p>
			</article>

			<article className="card glass">
				<h3 className="glass-text">Vent</h3>
					<p>10km/h</p>
			</article>

			<article className="card glass">
				<h3 className="glass-text">Ressenti</h3>
					<p>22°C</p>
			</article>
		</section>
	);
};

export default WeatherInfos;
