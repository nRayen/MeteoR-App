"use client";

import { useState } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Menu from "@/components/Menu";

export default function Home() {
	// Menu open
	const [menuIsOpen, setMenuIsOpen] = useState(false)
	const handleMenu = () => {
		setMenuIsOpen(!menuIsOpen)
	}

	const focusSearchBar = () => {
		document.querySelector("#searchInput").focus();
	}

	return (
		<body>
			<Header onHandleMenu = {handleMenu}/>
			<main className="noCity">
				<p>Recherchez une ville</p>
				<button onClick={focusSearchBar}>Recherche</button>
			</main>
			<Footer />
			{/* {
				menuIsOpen ? <Menu onHandleMenu={handleMenu}/> : null
			} */}
			<Menu className={menuIsOpen ? "menu visible" : "menu"} menuIsOpen={menuIsOpen} onHandleMenu={handleMenu}/>
		</body>
	);
}
