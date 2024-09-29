import { useState } from "react";
import FlecheDroiteSVG from "./svg/FlecheDroiteSVG";
import FlecheGaucheSVG from "./svg/FlecheGaucheSVG";
import NuageuxSVG from "./svg/NuageuxSVG";
import FavoriteSVG from "./svg/FavoriteSVG";
import DateSelector from "./DateSelector";

const CurrentWeather = ({city}) => {
	const [weather, setWeather] = useState("Nuageux")
	const [temperature, setTemperature] = useState(20)

	return (
		<section className="current">
			<h2 className="currentCity">{city}<FavoriteSVG /></h2>

			<p className="temperature">{temperature}°C</p>
			<div className="sky">
				<NuageuxSVG alt="nuage" className="sky-icon" />
				<p className="sky-label">{weather}</p>
			</div>

			<DateSelector/>
		</section>
	);
};

export default CurrentWeather;
