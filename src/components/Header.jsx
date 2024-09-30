import LoupeSVG from "./svg/LoupeSVG";
import FaviconSVG from "./svg/FaviconSVG";
import Link from "next/link";

const Header = ({ onHandleMenu }) => {
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
					autocomplete="off"
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
				onClick={onHandleMenu}
			>
				<div className="bar"></div>
				<div className="bar"></div>
				<div className="bar"></div>
			</button>
		</header>
	);
};

export default Header;
