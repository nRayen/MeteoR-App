"use client";

import Footer from "@/components/Footer";
import CurrentWeather from "@/components/CurrentWeather";
import WeatherInfos from "@/components/WeatherInfos";
import DailyPreview from "@/components/DailyPreview";
import HourlyPreview from "@/components/HourlyPreview";
import { useState } from "react";
import Header from "@/components/Header";
import Menu from "@/components/Menu";



const data = [
	{
		city : "Paris",
		weather : "Nuageux"
	},
	{
		city : "Dakar",
		weather : "Ensoleillé"
	},
	{
		city : "New-York",
		weather : "Couché de soleil"
	},
	{
		city : "Hanoi",
		weather : "Partiellement nuageux"
	},
	{
		city : "Bamako",
		weather : "Ensoleillé"
	},
	{
		city : "Dubai",
		weather : "Nuageux"
	},
]








export default function Home({params}) {
	// Menu open
	const [menuIsOpen, setMenuIsOpen] = useState(false)
	const handleMenu = () => {
		setMenuIsOpen(!menuIsOpen)
	}

    const [city,setCity] = useState(params.ville)
	const weather = data.find(data => data.city.toLowerCase() == params.ville.toLowerCase()).weather;
	return (
		<body className= {
			weather == "Ensoleillé" ? "sunny" :
			weather == "Pluie" ? "rain" :
			weather == "Partiellement nuageux" ? "partlyCloudy" :
			weather == "Couché de soleil" ? "sunset" :
			weather == "Nuageux" ? "cloudy" : ""
		}>
			<Header onHandleMenu = {handleMenu}/>
			<main>
				<CurrentWeather city = {city} weather = {weather}/>
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
