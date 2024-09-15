import NuageuxSVG from "./svg/NuageuxSVG";

const DailyPreview = () => {
	return (
		<section className="daily glass">
			<h3 className="glass-text">Jours à venir</h3>
			<div className="preview-d">
				<div className="day">
					<h4>Mardi</h4>
					<NuageuxSVG alt="nuage" />
					<div className="temp">
						<span className="min">8°</span>
						<span className="max">23°</span>
					</div>
				</div>

				<div className="day">
					<h4>Mercredi</h4>
					<NuageuxSVG alt="nuage" />
					<div className="temp">
						<span className="min">8°</span>
						<span className="max">23°</span>
					</div>
				</div>

				<div className="day">
					<h4>Jeudi</h4>
					<NuageuxSVG alt="nuage" />
					<div className="temp">
						<span className="min">8°</span>
						<span className="max">23°</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DailyPreview;
