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

	return (
		<body>
			<Header onHandleMenu = {handleMenu}/>
			<main>
				{/* <CurrentWeather/>
				<div className="informations">
					<div className="left">
						<WeatherInfos />
						<DailyPreview />
					</div>
					<HourlyPreview />
				</div> */}
				<h2>Chargement...</h2>
			</main>
			<Footer />
			{/* {
				menuIsOpen ? <Menu onHandleMenu={handleMenu}/> : null
			} */}
			<Menu className={menuIsOpen ? "menu visible" : "menu"} menuIsOpen={menuIsOpen} onHandleMenu={handleMenu}/>
		</body>
	);
}
