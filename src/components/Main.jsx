"use client"
import { getCurrentData, getForecastData } from "@/utils/getData";
import React from "react";
import CurrentWeather from "./CurrentWeather";
import WeatherInfos from "./WeatherInfos";
import DailyPreview from "./DailyPreview";
import HourlyPreview from "./HourlyPreview";
import { useRouter } from "next/navigation";

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
async function Main({city}) {
	const router = useRouter();

	let currentData
	let forecastData

	try {
		currentData = await getCurrentData(city);
		forecastData = await getForecastData(city);
		if (!currentData || currentData.cod !== 200) {
			router.push("/notfound/")
            return;
        }
	} catch (error) {
		router.push("/notfound")
		return
	}



	return (
		<main>
			<CurrentWeather city={city} currentData={currentData} />
			<div className="informations">
				<div className="left">
					<WeatherInfos currentData={currentData} />
					<DailyPreview forecastData={forecastData} />
				</div>
				<HourlyPreview currentData={currentData} forecastData={forecastData} />
			</div>
		</main>
	);
};

export default Main;
