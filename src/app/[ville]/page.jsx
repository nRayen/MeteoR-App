"use client"
import Footer from "@/components/Footer";
import CurrentWeather from "@/components/CurrentWeather";
import WeatherInfos from "@/components/WeatherInfos";
import DailyPreview from "@/components/DailyPreview";
import HourlyPreview from "@/components/HourlyPreview";
import Header from "@/components/Header";
import { getData } from "@/utils/getData";

export default async function Home({params}) {

	const city = params.ville;
	let currentData = await getData(params.ville)
	console.log(currentData)

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
					<HourlyPreview />
				</div>
			</main>
			<Footer />
			{/* {
				menuIsOpen ? <Menu onHandleMenu={handleMenu}/> : null
			} */}
		</body>
	);
}
