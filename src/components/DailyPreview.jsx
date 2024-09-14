import NuageuxSVG from "./svg/NuageuxSVG";

const DailyPreview = () => {
	return (
		<section class="daily glass">
			<h3 class="glass-text">Jours à venir</h3>
			<div class="preview-d">
				<div class="day">
					<h4>Mardi</h4>
					<NuageuxSVG alt="nuage" />
					<div class="temp">
						<span class="min">8°</span>
						<span class="max">23°</span>
					</div>
				</div>

				<div class="day">
					<h4>Mercredi</h4>
					<NuageuxSVG alt="nuage" />
					<div class="temp">
						<span class="min">8°</span>
						<span class="max">23°</span>
					</div>
				</div>

				<div class="day">
					<h4>Jeudi</h4>
					<NuageuxSVG alt="nuage" />
					<div class="temp">
						<span class="min">8°</span>
						<span class="max">23°</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DailyPreview;
