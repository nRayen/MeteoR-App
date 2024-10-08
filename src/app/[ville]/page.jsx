"use client"
import Footer from "@/components/Footer";
import CurrentWeather from "@/components/CurrentWeather";
import WeatherInfos from "@/components/WeatherInfos";
import DailyPreview from "@/components/DailyPreview";
import HourlyPreview from "@/components/HourlyPreview";
import Header from "@/components/Header";
import { getCurrentData } from "@/utils/getData";
// import { Suspense } from "react/cjs/react.production.min";
// import Loading from "./Loading";

export default async function Home({params}) {

	const city = params.ville;

	let currentData = await getCurrentData(params.ville)
	console.log(currentData)

	let forecastData = await getCurrentData(params.ville)
	console.log(forecastData)

	return (
		<body>
			<Header/>
			<main>
				<CurrentWeather city = {city} currentData={currentData}/>
				<div className="informations">
					<div className="left">
						<WeatherInfos currentData={currentData}/>
						<DailyPreview />
					</div>
					<HourlyPreview currentData={currentData} forecastData={forecastData}/>
				</div>
			</main>
			<Footer />
			{/* {
				menuIsOpen ? <Menu onHandleMenu={handleMenu}/> : null
			} */}
		</body>
	);
}
