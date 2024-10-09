"use client"

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LocateSVG from "@/components/svg/LocateSVG";
import LoupeSVG from "@/components/svg/LoupeSVG";


export default function Home() {

	// Focus sur la barre de recherche
	const focusSearchBar = () => {
		document.querySelector("#searchInput").focus();
	}

	let localisation;

	function locateUser() {
		navigator.geolocation.getCurrentPosition((position) => {

			console.log(position)
		})
	}


	return (
		<body>
			<Header/>
			<main className="noCity">
				<button onClick={focusSearchBar}>Recherchez votre ville<LoupeSVG/></button>
				<p>ou</p>
				<button onClick={locateUser}>Localisez vous<LocateSVG/></button>
			</main>
			<Footer/>
		</body>
	);
}
