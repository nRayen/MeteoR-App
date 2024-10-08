import HourlyPreviewDesktop from "./HourlyPreviewDesktop";
import HourlyPreviewMobile from "./HourlyPreviewMobile";

const HourlyPreview = ({currentData, forecastData}) => {



	return (
		<section className="hourly glass">
			<h3 className="glass-text">Prévisions</h3>
			<HourlyPreviewMobile currentData={currentData} forecastData={forecastData} />
			<HourlyPreviewDesktop currentData={currentData} forecastData={forecastData}/>
		</section>
	);
};

export default HourlyPreview;
