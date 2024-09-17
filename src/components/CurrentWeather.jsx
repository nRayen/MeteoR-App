import { useState } from "react";
import FlecheDroiteSVG from "./svg/FlecheDroiteSVG";
import FlecheGaucheSVG from "./svg/FlecheGaucheSVG";
import NuageuxSVG from "./svg/NuageuxSVG";
import FavoriteSVG from "./svg/FavoriteSVG";
import DateSelector from "./DateSelector";

const CurrentWeather = ({selectedDate, onNextDay, onPreviousDay}) => {
	const [city, setCity] = useState("Paris")
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

			<DateSelector selectedDate = {selectedDate} onPreviousDay={onPreviousDay} onNextDay={onNextDay}/>
		</section>
	);
};

export default CurrentWeather;
