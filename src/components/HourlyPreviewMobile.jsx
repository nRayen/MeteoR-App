import NuageuxSVG from "./svg/NuageuxSVG";
import WeatherIcon from "./WeatherIcon";

const HourlyPreviewMobile = ({forecastData}) => {

	let weatherHourList = forecastData.list
	let timeDiff = forecastData.city.timezone / 3600

	return (
			<div className="preview-h mobile">

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
	);
};

export default HourlyPreviewMobile;
