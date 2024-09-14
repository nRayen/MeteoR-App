import LoupeSVG from "./svg/LoupeSVG";
import FaviconSVG from "./svg/FaviconSVG";

const Header = () => {
	return (
		<header>
			<FaviconSVG id="favicon" alt="favcon" />
			<h1 id="title">MeteoR</h1>
			<form class="searchbar glass">
				<input
					type="text"
					name="searchbar"
					id="searchInput"
					placeholder="Chercher un lieu"
					autocomplete="off"
				/>
				<LoupeSVG />
				<ul class="suggestions-list glass">
					<li class="suggestion">Paris</li>
					<li class="suggestion">New York</li>
					<li class="suggestion">Dakar</li>
					<li class="suggestion">Hanoï</li>
				</ul>
			</form>
			<button class="menu-button" aria-label="menu-button">
				<div class="bar"></div>
				<div class="bar"></div>
				<div class="bar"></div>
			</button>
		</header>
	);
};

export default Header;
