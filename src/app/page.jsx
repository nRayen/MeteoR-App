"use client";

import Footer from "@/components/Footer";
import CurrentWeather from "@/components/CurrentWeather";
import WeatherInfos from "@/components/WeatherInfos";
import DailyPreview from "@/components/DailyPreview";
import HourlyPreview from "@/components/HourlyPreview";
import { useState } from "react";
import Header from "@/components/Header";

export default function Home() {


	//Date selector
	const [selectedDate, setSelectedDate] = useState(new Date)

	const previousDay = () => {
		console.log("yesterday")
	}
	const nextDay = () => {
		console.log("tomorrow")
	}

	return (
		<body>
			<Header />
			<main>
				<CurrentWeather selectedDate = {selectedDate} onPreviousDay={previousDay} onNextDay={nextDay} />
				<div className="informations">
					<div className="left">
						<WeatherInfos />
						<DailyPreview />
					</div>
					<HourlyPreview />
				</div>
			</main>
			<Footer />
		</body>
	);
}
