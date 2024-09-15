import LoupeSVG from "./svg/LoupeSVG";
import FaviconSVG from "./svg/FaviconSVG";

const Header = () => {
	return (
		<header>
			<FaviconSVG id="favicon" alt="favcon" />
			<h1 id="title">MeteoR</h1>
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
					<li className="suggestion">Paris</li>
					<li className="suggestion">New York</li>
					<li className="suggestion">Dakar</li>
					<li className="suggestion">Hanoï</li>
				</ul>
			</form>
			<button className="menu-button" aria-label="menu-button">
				<div className="bar"></div>
				<div className="bar"></div>
				<div className="bar"></div>
			</button>
		</header>
	);
};

export default Header;
