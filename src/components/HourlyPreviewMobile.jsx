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


				<div className="h">
					<h4>00h</h4>
					<NuageuxSVG alt="nuage" />
					<p>20°</p>
				</div>

				<div className="h">
					<h4>01h</h4>
					<NuageuxSVG alt="nuage" />
					<p>20°</p>
				</div>

				<div className="h">
					<h4>02h</h4>
					<NuageuxSVG alt="nuage" />
					<p>20°</p>
				</div>

				<div className="h">
					<h4>03h</h4>
					<NuageuxSVG alt="nuage" />
					<p>20°</p>
				</div>

				<div className="h">
					<h4>04h</h4>
					<NuageuxSVG alt="nuage" />
					<p>20°</p>
				</div>

				<div className="h">
					<h4>05h</h4>
					<NuageuxSVG alt="nuage" />
					<p>20°</p>
				</div>

				<div className="h">
					<h4>06h</h4>
					<NuageuxSVG alt="nuage" />
					<p>20°</p>
				</div>

				<div className="h">
					<h4>07h</h4>
					<NuageuxSVG alt="nuage" />
					<p>20°</p>
				</div>

				<div className="h">
					<h4>08h</h4>
					<NuageuxSVG alt="nuage" />
					<p>20°</p>
				</div>

				<div className="h">
					<h4>09h</h4>
					<NuageuxSVG alt="nuage" />
					<p>20°</p>
				</div>

				<div className="h">
					<h4>10h</h4>
					<NuageuxSVG alt="nuage" />
					<p>20°</p>
				</div>

				<div className="h">
					<h4>11h</h4>
					<NuageuxSVG alt="nuage" />
					<p>20°</p>
				</div>

				<div className="h">
					<h4>12h</h4>
					<NuageuxSVG alt="nuage" />
					<p>20°</p>
				</div>

				<div className="h">
					<h4>13h</h4>
					<NuageuxSVG alt="nuage" />
					<p>20°</p>
				</div>

				<div className="h">
					<h4>14h</h4>
					<NuageuxSVG alt="nuage" />
					<p>20°</p>
				</div>

				<div className="h">
					<h4>15h</h4>
					<NuageuxSVG alt="nuage" />
					<p>20°</p>
				</div>

				<div className="h">
					<h4>16h</h4>
					<NuageuxSVG alt="nuage" />
					<p>20°</p>
				</div>

				<div className="h">
					<h4>17h</h4>
					<NuageuxSVG alt="nuage" />
					<p>20°</p>
				</div>

				<div className="h">
					<h4>18h</h4>
					<NuageuxSVG alt="nuage" />
					<p>20°</p>
				</div>

				<div className="h">
					<h4>19h</h4>
					<NuageuxSVG alt="nuage" />
					<p>20°</p>
				</div>

				<div className="h">
					<h4>20h</h4>
					<NuageuxSVG alt="nuage" />
					<p>20°</p>
				</div>

				<div className="h">
					<h4>21h</h4>
					<NuageuxSVG alt="nuage" />
					<p>20°</p>
				</div>

				<div className="h">
					<h4>22h</h4>
					<NuageuxSVG alt="nuage" />
					<p>20°</p>
				</div>

				<div className="h">
					<h4>23h</h4>
					<NuageuxSVG alt="nuage" />
					<p>20°</p>
				</div>
			</div>
	);
};

export default HourlyPreviewMobile;
