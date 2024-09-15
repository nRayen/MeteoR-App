"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CurrentWeather from "@/components/CurrentWeather";
import WeatherInfos from "@/components/WeatherInfos";
import DailyPreview from "@/components/DailyPreview";
import HourlyPreview from "@/components/HourlyPreview";

export default function Home() {
	return (
		<body>
			<Header />
			<main>
				<CurrentWeather />
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
