import HourlyPreviewDesktop from "./HourlyPreviewDesktop";
import HourlyPreviewMobile from "./HourlyPreviewMobile";
import NuageuxSVG from "./svg/NuageuxSVG";

const HourlyPreview = () => {
	return (
		<section className="hourly glass">
			<h3 className="glass-text">Prévisions</h3>
			<HourlyPreviewMobile />
			<HourlyPreviewDesktop />
		</section>
	);
};

export default HourlyPreview;
