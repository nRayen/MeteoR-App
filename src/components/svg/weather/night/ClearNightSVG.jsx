import React from "react";

const ClearNightSVG = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
			<defs>
				<linearGradient
					id="ClearNightSVGa"
					x1="21.92"
					y1="18.75"
					x2="38.52"
					y2="47.52"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stop-color="#86c3db" />
					<stop offset="0.45" stop-color="#86c3db" />
					<stop offset="1" stop-color="#5eafcf" />
					<animateTransform
						attributeName="gradientTransform"
						type="rotate"
						values="5 32 32; -15 32 32; 5 32 32"
						dur="10s"
						repeatCount="indefinite"
					/>
				</linearGradient>
			</defs>
			<path
				d="M46.66,36.2A16.66,16.66,0,0,1,29.88,19.65a16.29,16.29,0,0,1,.55-4.15A16.56,16.56,0,1,0,48.5,36.1C47.89,36.16,47.28,36.2,46.66,36.2Z"
				stroke="#72b9d5"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="0.5"
				fill="url(#ClearNightSVGa)"
			>
				<animateTransform
					attributeName="transform"
					type="rotate"
					values="-5 32 32; 15 32 32; -5 32 32"
					dur="10s"
					repeatCount="indefinite"
				/>
			</path>
		</svg>
	);
};

export default ClearNightSVG;
