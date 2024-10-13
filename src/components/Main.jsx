"use client"
import { getCurrentData } from "@/utils/getData";
import React from "react";
import CurrentWeather from "./CurrentWeather";
import WeatherInfos from "./WeatherInfos";
import DailyPreview from "./DailyPreview";
import HourlyPreview from "./HourlyPreview";
import { getWeather, getWeatherr } from "@/utils/getWeather";

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
async function Main({city}) {

	// let data = await getWeather(city)
	// console.log(data)
	let data = await getWeatherr(city)

	return (
		<main>
				<CurrentWeather city={city} currentData={data.currentConditions} />
			<div className="informations">
				<div className="left">
					<WeatherInfos currentData={data.currentConditions} />
					<DailyPreview />
				</div>
				<HourlyPreview currentData={data.currentConditions} forecastData={data.days} />
			</div>
		</main>
	);
};

export default Main;
