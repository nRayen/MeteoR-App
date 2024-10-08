import NuageuxSVG from "./svg/NuageuxSVG";
import FavoriteSVG from "./svg/FavoriteSVG";
import DateSelector from "./DateSelector";
import { Capitalize } from "@/utils/capitalize";

const CurrentWeather = ({ city, currentData }) => {
	let temperature = Math.round(currentData.main.temp);
	let description = Capitalize(currentData.weather[0].description);

	return (
		<section className="current">
			<h2 className="currentCity">
				{Capitalize(city)}
				<FavoriteSVG />
			</h2>

			<p className="temperature">{temperature}°C</p>
			<div className="sky">
				<NuageuxSVG alt="nuage" className="sky-icon" />
				<p className="sky-label">{description}</p>
			</div>
			<DateSelector />
		</section>
	);
};

export default CurrentWeather;
