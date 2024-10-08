import { getCurrentData } from "@/utils/getData";
import React from "react";
import CurrentWeather from "./CurrentWeather";
import WeatherInfos from "./WeatherInfos";
import DailyPreview from "./DailyPreview";
import HourlyPreview from "./HourlyPreview";

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
async function Main({city}) {



    let currentData = await getCurrentData(city);
	console.log(currentData);

	let forecastData = await getCurrentData(city);
	console.log(forecastData);

	return (
		<main>
				<CurrentWeather city={city} currentData={currentData} />
			<div className="informations">
				<div className="left">
					<WeatherInfos currentData={currentData} />
					<DailyPreview />
				</div>
				<HourlyPreview currentData={currentData} forecastData={forecastData} />
			</div>
		</main>
	);
};

export default Main;
