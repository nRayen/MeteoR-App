import { useState } from "react";
import FlecheDroiteSVG from "./svg/FlecheDroiteSVG";
import FlecheGaucheSVG from "./svg/FlecheGaucheSVG";
import NuageuxSVG from "./svg/NuageuxSVG";
import FavoriteSVG from "./svg/FavoriteSVG";

const CurrentWeather = ({selectedDate, onNextDay, onPreviousDay}) => {
	const [city, setCity] = useState("Paris")
	const [weather, setWeather] = useState("Nuageux")
	const [temperature, setTemperature] = useState(20)

	

	return (
		<section className="current">
			<h2 className="currentCity">{city}<FavoriteSVG /></h2>

			<div className="date">
				<button className="dateselector dateLeft" aria-label="date-selector-left" onClick={onPreviousDay}>
					<FlecheGaucheSVG />
				</button>
				<p>{new Date(selectedDate).toLocaleDateString()}</p>
				<button className="dateselector dateRight" aria-label="date-selector-left" onClick={onNextDay}>
					<FlecheDroiteSVG />
				</button>
			</div>

			<p className="temperature">{temperature}°C</p>
			<div className="sky">
				<NuageuxSVG alt="nuage" className="sky-icon" />
				<p className="sky-label">{weather}</p>
			</div>
		</section>
	);
};

export default CurrentWeather;
