import DayPreview from "./DayPreview";
import NuageuxSVG from "./svg/NuageuxSVG";

const DailyPreview = ({forecastData}) => {



	return (
		<section className="daily glass">
			<h3 className="glass-text">Jours à venir</h3>
			<div className="preview-d">

				<DayPreview forecastData={forecastData} index={0} />
				<DayPreview forecastData={forecastData} index={1} />
				<DayPreview forecastData={forecastData} index={2} />

			</div>
		</section>
	);
};

export default DailyPreview;
