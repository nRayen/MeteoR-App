import DayHourlyPreviewDesktop from "./DayHourlyPreviewDesktop";

const HourlyPreviewDesktop = ({currentData, forecastData}) => {
	const today = new Date();
	return (
			<div className="preview-h desktop">
				<DayHourlyPreviewDesktop index={0} forecastData = {forecastData}/>
				<DayHourlyPreviewDesktop index={1} forecastData = {forecastData}/>
				<DayHourlyPreviewDesktop index={2} forecastData = {forecastData}/>
				<DayHourlyPreviewDesktop index={3} forecastData = {forecastData}/>
			</div>
	); 
};

export default HourlyPreviewDesktop;
