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
	let data = await getData(params.ville)
	console.log(data)

	return (
		<body>
			<Header/>
			<main>

				<CurrentWeather city = {city} data={data}/>
				<div className="informations">
					<div className="left">
						<WeatherInfos data={data}/>
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
