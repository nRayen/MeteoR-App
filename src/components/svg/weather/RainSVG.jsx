import React from "react";

const RainSVG = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 64 64"
		>
			<defs>
				<linearGradient
					id="RainSVGa"
					x1="22.56"
					y1="21.96"
					x2="39.2"
					y2="50.8"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stop-color="#f3f7fe" />
					<stop offset="0.45" stop-color="#f3f7fe" />
					<stop offset="1" stop-color="#deeafb" />
				</linearGradient>
				<linearGradient
					id="RainSVGb"
					x1="22.53"
					y1="42.95"
					x2="25.47"
					y2="48.05"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stop-color="#4286ee" />
					<stop offset="0.45" stop-color="#4286ee" />
					<stop offset="1" stop-color="#0950bc" />
				</linearGradient>
				<linearGradient
					id="RainSVGc"
					x1="29.53"
					y1="42.95"
					x2="32.47"
					y2="48.05"
					xlinkHref="#RainSVGb"
				/>
				<linearGradient
					id="RainSVGd"
					x1="36.53"
					y1="42.95"
					x2="39.47"
					y2="48.05"
					xlinkHref="#RainSVGb"
				/>
			</defs>
			<path
				d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z"
				stroke="#e6effc"
				stroke-miterlimit="10"
				stroke-width="0.5"
				fill="url(#RainSVGa)"
			/>
			<line
				x1="24.39"
				y1="43.03"
				x2="23.61"
				y2="47.97"
				fill="none"
				stroke-linecap="round"
				stroke-miterlimit="10"
				stroke-width="2"
				stroke="url(#RainSVGb)"
			>
				<animateTransform
					attributeName="transform"
					type="translate"
					values="1 -5; -2 10"
					dur="0.7s"
					repeatCount="indefinite"
				/>
				<animate
					attributeName="opacity"
					values="0;1;1;0"
					dur="0.7s"
					repeatCount="indefinite"
				/>
			</line>
			<line
				x1="31.39"
				y1="43.03"
				x2="30.61"
				y2="47.97"
				fill="none"
				stroke-linecap="round"
				stroke-miterlimit="10"
				stroke-width="2"
				stroke="url(#RainSVGc)"
			>
				<animateTransform
					attributeName="transform"
					begin="-0.4s"
					type="translate"
					values="1 -5; -2 10"
					dur="0.7s"
					repeatCount="indefinite"
				/>
				<animate
					attributeName="opacity"
					begin="-0.4s"
					values="0;1;1;0"
					dur="0.7s"
					repeatCount="indefinite"
				/>
			</line>
			<line
				x1="38.39"
				y1="43.03"
				x2="37.61"
				y2="47.97"
				fill="none"
				stroke-linecap="round"
				stroke-miterlimit="10"
				stroke-width="2"
				stroke="url(#RainSVGd)"
			>
				<animateTransform
					attributeName="transform"
					begin="-0.2s"
					type="translate"
					values="1 -5; -2 10"
					dur="0.7s"
					repeatCount="indefinite"
				/>
				<animate
					attributeName="opacity"
					begin="-0.2s"
					values="0;1;1;0"
					dur="0.7s"
					repeatCount="indefinite"
				/>
			</line>
		</svg>
	);
};

export default RainSVG;
