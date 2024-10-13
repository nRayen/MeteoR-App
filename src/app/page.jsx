"use client"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeMain from "@/components/HomeMain";
import LocateSVG from "@/components/svg/LocateSVG";
import LoupeSVG from "@/components/svg/LoupeSVG";
import { getCity } from "@/utils/getData";
// import { useRouter } from "next/navigation";


export default async function Home() {

	// const router = useRouter();

	// Focus sur la barre de recherche
	const focusSearchBar = () => {
		document.querySelector("#searchInput").focus();
	}

	// async function locateUser() {
	// 	let lat, lon;
	// 	navigator.geolocation.getCurrentPosition((position) => {
	// 		lat = position.coords.latitude
	// 		lon = position.coords.longitude
	// 	})
	// 	// let city = await getCity([lat,lon])
	// 	console.log(await getCity(lat,lon))
	// }


	return (
		<body>
			<Header/>
			{/* <main className="noCity">
				<button onClick={focusSearchBar}>Recherchez votre ville<LoupeSVG/></button>
				<p>ou</p>
				<button onClick={locateUser}>Localisez vous<LocateSVG/></button>
			</main> */}
			<HomeMain focusSearchBar={focusSearchBar} />
			<Footer/>
		</body>
	);
}
