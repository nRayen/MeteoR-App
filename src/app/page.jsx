"use client";
import Image from "next/image";
import NuageuxSVG from "@/components/svg/NuageuxSVG";
import FaviconSVG from "@/components/svg/FaviconSVG";
import LoupeSVG from "@/components/svg/LoupeSVG";
import FlecheGaucheSVG from "@/components/svg/FlecheGaucheSVG";
import FlecheDroiteSVG from "@/components/svg/FlecheDroiteSVG";
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
				<div class="informations">
					<div class="left">
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
