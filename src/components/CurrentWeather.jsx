import FlecheDroiteSVG from "./svg/FlecheDroiteSVG";
import FlecheGaucheSVG from "./svg/FlecheGaucheSVG";
import NuageuxSVG from "./svg/NuageuxSVG";

const CurrentWeather = () => {
	return (
		<section class="current">
			<h2 class="currentCity">Paris</h2>

			<div class="date">
				<button class="dateselector dateLeft" aria-label="date-selector-left">
					<FlecheGaucheSVG />
				</button>
				<p>05/09/2024</p>
				<button class="dateselector dateRight" aria-label="date-selector-left">
					<FlecheDroiteSVG />
				</button>
			</div>

			<p class="temperature">20°C</p>
			<div class="sky">
				<NuageuxSVG alt="nuage" class="sky-icon" />
				<p class="sky-label">Nuageux</p>
			</div>
		</section>
	);
};

export default CurrentWeather;
