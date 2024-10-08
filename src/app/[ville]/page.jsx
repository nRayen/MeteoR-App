import Footer from "@/components/Footer";
import CurrentWeather from "@/components/CurrentWeather";
import WeatherInfos from "@/components/WeatherInfos";
import DailyPreview from "@/components/DailyPreview";
import HourlyPreview from "@/components/HourlyPreview";
import Header from "@/components/Header";
import { getCurrentData } from "@/utils/getData";
import Main from "@/components/Main";
import { Suspense } from "react";
import Loader from "./Loader";



export default async function Home({ params }) {
	const city = params.ville;
	return (
		<body>
			<Header />

			<Suspense fallback={<Loader/>}>
				<Main city={city}/>
			</Suspense>

			<Footer />
			{/* {
				menuIsOpen ? <Menu onHandleMenu={handleMenu}/> : null
			} */}
		</body>
	);
}
