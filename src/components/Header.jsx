"use client"
import LoupeSVG from "./svg/LoupeSVG";
import FaviconSVG from "./svg/FaviconSVG";
import Link from "next/link";
import { useState } from "react";
import Menu from "./Menu";

const Header = () => {

	const [menuIsOpen, setMenuIsOpen] = useState(false)
	const handleMenu = () => {
		setMenuIsOpen(!menuIsOpen)
		console.log(menuIsOpen)
	}



	return (
		<header>
			<FaviconSVG id="favicon" alt="favcon"/>
			<Link href="./">
				<h1 id="title">MeteoR</h1>
			</Link>
			<form className="searchbar glass">
				<input
					type="text"
					name="searchbar"
					id="searchInput"
					placeholder="Chercher un lieu"
					autoComplete="off"
				/>
				<LoupeSVG />
				<ul className="suggestions-list glass">
					<li className="suggestion">
						<Link href="/Paris">Paris</Link>
					</li>
					<li className="suggestion">
						<Link href="/Dakar">Dakar</Link>
					</li>
					<li className="suggestion">
						<Link href="/New-York">New York</Link>
					</li>
					<li className="suggestion">
						<Link href="/Hanoi">Hanoi</Link>
					</li>
				</ul>
			</form>
			<button
				className="menu-button"
				aria-label="menu-button"
				onClick={handleMenu}
			>
				<div className="bar"></div>
				<div className="bar"></div>
				<div className="bar"></div>
			</button>
			<Menu onHandleMenu={handleMenu} menuIsOpen={menuIsOpen}/>
		</header>
	);
};

export default Header;
