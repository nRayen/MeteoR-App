import HourlyPreviewDesktop from "./HourlyPreviewDesktop";
import HourlyPreviewMobile from "./HourlyPreviewMobile";

const HourlyPreview = ({currentData, forecastData}) => {

	// const [matches, setMatches] = useState(
	// 	window.matchMedia("(min-width: 768px)").matches
	//   )

	//   useEffect(() => {
	// 	window
	// 	.matchMedia("(min-width: 1240px)")
	// 	.addEventListener('change', e => setMatches( e.matches ));
	//   }, []);

	return (
		<section className="hourly glass">
			<h3 className="glass-text">Prévisions</h3>
			{/* {screen.width > 1240 ? (
				<HourlyPreviewDesktop currentData={currentData} forecastData={forecastData}/>
			) : (
				<HourlyPreviewMobile currentData={currentData} forecastData={forecastData} />
			)} */}

			{/* {matches && (<HourlyPreviewDesktop currentData={currentData} forecastData={forecastData}/>)}
			{!matches && (<HourlyPreviewMobile currentData={currentData} forecastData={forecastData} />)} */}

			<HourlyPreviewDesktop currentData={currentData} forecastData={forecastData}/>
			<HourlyPreviewMobile currentData={currentData} forecastData={forecastData} />
		</section>
	);
};

export default HourlyPreview;
