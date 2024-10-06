"use client"

import Footer from "@/components/Footer";
import Header from "@/components/Header";


export default function Home() {

	// Focus sur la barre de recherche
	const focusSearchBar = () => {
		document.querySelector("#searchInput").focus();
	}


	return (
		<body>
			<Header/>
			<main className="noCity">
				<p>Recherchez une ville</p>
				<button onClick={focusSearchBar}>Recherche</button>
			</main>
			<Footer />
		</body>
	);
}
