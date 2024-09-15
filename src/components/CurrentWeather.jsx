import { useState } from "react";
import FlecheDroiteSVG from "./svg/FlecheDroiteSVG";
import FlecheGaucheSVG from "./svg/FlecheGaucheSVG";
import NuageuxSVG from "./svg/NuageuxSVG";

const CurrentWeather = () => {
	let [city, setCity] = useState("Paris")


	return (
		<section className="current">
			<h2 className="currentCity">{city}</h2>

			<div className="date">
				<button className="dateselector dateLeft" aria-label="date-selector-left">
					<FlecheGaucheSVG />
				</button>
				<p>05/09/2024</p>
				<button className="dateselector dateRight" aria-label="date-selector-left">
					<FlecheDroiteSVG />
				</button>
			</div>

			<p className="temperature">20°C</p>
			<div className="sky">
				<NuageuxSVG alt="nuage" className="sky-icon" />
				<p className="sky-label">Nuageux</p>
			</div>
		</section>
	);
};

export default CurrentWeather;
