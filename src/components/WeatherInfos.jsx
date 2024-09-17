import Image from "next/image";

const WeatherInfos = () => {
	return (
		<section className="weather-info">
			<article className="card glass">
				<h3 className="glass-text">Qualité de l'air</h3>
				<div>
					<p>Moyenne</p>
					<svg fill="#ffffff"  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" stroke="#ffffff">
						<g id="SVGRepo_bgCarrier" stroke-width="0"/>
						<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
						<g id="SVGRepo_iconCarrier"> <g> <g> <path d="M136.767,260.021c-7.498,0-11.07,3.571-11.783,9.285c-2.143,17.14-6.071,43.923-48.565,43.923 c-34.639,0-52.851-17.14-52.851-54.635V147.894c0-37.138,18.211-54.278,51.421-54.278c42.495,0,49.279,27.853,49.993,43.209 c0.357,5,3.57,8.927,11.783,8.927c8.214,0,11.784-2.499,11.784-14.283c0-32.139-26.782-59.635-73.561-59.635 C34.281,71.834,0,92.545,0,147.894v110.699c0,55.707,33.567,76.418,73.919,76.418c47.136,0,74.632-27.853,74.632-60.349 C148.551,262.879,144.98,260.021,136.767,260.021z"/> </g> </g> <g> <g> <path d="M261.032,71.834c-41.779,0-74.275,20.712-74.275,76.061v110.699c0,55.707,32.496,76.419,74.275,76.419 s74.275-20.712,74.275-76.419V147.894C335.307,92.545,302.811,71.834,261.032,71.834z M311.74,258.593 c0,37.495-18.926,54.635-50.707,54.635c-31.781,0-50.707-17.14-50.707-54.635V147.894c0-37.138,18.926-54.278,50.707-54.278 s50.707,17.14,50.707,54.278V258.593z"/> </g> </g> <g> <g> <path d="M503.43,418.384H389.517v-22.14c0-47.494,119.983-71.777,119.983-148.551c0-38.566-29.997-68.562-71.062-68.562 c-37.852,0-67.134,24.997-67.133,59.278c0,10.713,3.571,14.641,10.713,14.641c8.213,0,12.498-5,12.498-9.642 c0-28.211,18.568-42.137,43.208-42.137c32.853,0,48.208,24.64,48.208,47.136c0,62.493-120.698,88.56-120.698,147.837v34.639 c0,5.714,6.428,9.284,11.07,9.284H503.43c4.642,0,8.57-5.357,8.57-11.07S508.072,418.384,503.43,418.384z"/> </g> </g> </g>
					</svg>
				</div>
			</article>

			<article className="card glass">
				<h3 className="glass-text">Humidité</h3>
				<div>
					<p>10%</p>
					<svg fill="#ffffff" viewBox="-5 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" class="jam jam-water-drop" stroke="#ffffff">
						<g id="SVGRepo_bgCarrier" stroke-width="0"/>
						<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
						<g id="SVGRepo_iconCarrier">
						<path d="M2 13a5 5 0 0 0 10 0c0-1.726-1.66-5.031-5-9.653C3.66 7.969 2 11.274 2 13zM7 0c4.667 6.09 7 10.423 7 13a7 7 0 0 1-14 0c0-2.577 2.333-6.91 7-13z"/>
						</g>
					</svg>
				</div>
			</article>

			<article className="card glass">
				<h3 className="glass-text">Vent</h3>
				<div>
					<p>10km/h</p>
					<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
						<g id="SVGRepo_bgCarrier" stroke-width="0"/>
						<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
						<g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 5.5C6.25 3.70508 7.70507 2.25 9.5 2.25C11.2949 2.25 12.75 3.70507 12.75 5.5C12.75 7.29493 11.2949 8.75 9.5 8.75H3C2.58579 8.75 2.25 8.41421 2.25 8C2.25 7.58579 2.58579 7.25 3 7.25H9.5C10.4665 7.25 11.25 6.4665 11.25 5.5C11.25 4.5335 10.4665 3.75 9.5 3.75C8.5335 3.75 7.75 4.5335 7.75 5.5V5.85714C7.75 6.27136 7.41421 6.60714 7 6.60714C6.58579 6.60714 6.25 6.27136 6.25 5.85714V5.5ZM14.25 7.5C14.25 5.15279 16.1528 3.25 18.5 3.25C20.8472 3.25 22.75 5.15279 22.75 7.5C22.75 9.84721 20.8472 11.75 18.5 11.75H2C1.58579 11.75 1.25 11.4142 1.25 11C1.25 10.5858 1.58579 10.25 2 10.25H18.5C20.0188 10.25 21.25 9.01878 21.25 7.5C21.25 5.98122 20.0188 4.75 18.5 4.75C16.9812 4.75 15.75 5.98122 15.75 7.5V8C15.75 8.41421 15.4142 8.75 15 8.75C14.5858 8.75 14.25 8.41421 14.25 8V7.5ZM3.25 14C3.25 13.5858 3.58579 13.25 4 13.25H18.5C20.8472 13.25 22.75 15.1528 22.75 17.5C22.75 19.8472 20.8472 21.75 18.5 21.75C16.1528 21.75 14.25 19.8472 14.25 17.5V17C14.25 16.5858 14.5858 16.25 15 16.25C15.4142 16.25 15.75 16.5858 15.75 17V17.5C15.75 19.0188 16.9812 20.25 18.5 20.25C20.0188 20.25 21.25 19.0188 21.25 17.5C21.25 15.9812 20.0188 14.75 18.5 14.75H4C3.58579 14.75 3.25 14.4142 3.25 14Z" fill="#ffffff"/> </g>
					</svg>
				</div>
			</article>

			<article className="card glass">
				<h3 className="glass-text">Ressenti</h3>
				<div>
					<p>22°C</p>
					<svg width="96px" height="96px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fcfcfc">
						<g id="SVGRepo_bgCarrier" stroke-width="0"/>
						<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
						<g id="SVGRepo_iconCarrier"> <path d="M11 15C12.1046 15 13 15.8954 13 17C13 18.1046 12.1046 19 11 19C9.89543 19 9 18.1046 9 17C9 15.8954 9.89543 15 11 15ZM11 15V8M15 6H18M15 8H18M15 10H18M15 12H18M11 3C12.1046 3 13 3.89543 13 5L13.0011 13.5358C14.1961 14.2275 15 15.5199 15 17C15 19.2091 13.2091 21 11 21C8.79086 21 7 19.2091 7 17C7 15.5195 7.80434 14.2268 8.99988 13.5352L9 5C9 3.89543 9.89543 3 11 3Z" stroke="#ffffff" stroke-linejoin="round"/> </g>
					</svg>
				</div>
			</article>
		</section>
	);
};

export default WeatherInfos;
