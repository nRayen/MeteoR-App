"use client";

import Footer from "@/components/Footer";
import CurrentWeather from "@/components/CurrentWeather";
import WeatherInfos from "@/components/WeatherInfos";
import DailyPreview from "@/components/DailyPreview";
import HourlyPreview from "@/components/HourlyPreview";
import { useState } from "react";
import Header from "@/components/Header";
import Menu from "@/components/Menu";

export default function Home() {
	// Menu open
	const [menuIsOpen, setMenuIsOpen] = useState(false)
	const handleMenu = () => {
		setMenuIsOpen(!menuIsOpen)
	}

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
			<Header onHandleMenu = {handleMenu}/>
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
			{/* {
				menuIsOpen ? <Menu onHandleMenu={handleMenu}/> : null
			} */}
			<Menu className={menuIsOpen ? "menu visible" : "menu"} menuIsOpen={menuIsOpen} onHandleMenu={handleMenu}/>
		</body>
	);
}
