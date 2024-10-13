import { Capitalize } from "@/utils/capitalize";
import DateSelector from "./DateSelector";
import FavoriteSVG from "./svg/FavoriteSVG";
import WeatherIcon from "./WeatherIcon";

const CurrentWeather = ({ city, currentData }) => {
	let temperature = Math.round(currentData.main.temp);
	let description = Capitalize(currentData.weather[0].description);
	let iconCode = currentData.weather[0].icon

	return (
		<section className="current">
			<h2 className="currentCity">
				{Capitalize(city)}
				<FavoriteSVG />
			</h2>

			<p className="temperature">{temperature}°C</p>
			<div className="sky">
				<WeatherIcon code = {iconCode}/>
				<p className="sky-label">{description}</p>
			</div>
			<DateSelector />
		</section>
	);
};

export default CurrentWeather;
