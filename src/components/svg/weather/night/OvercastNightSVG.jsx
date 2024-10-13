import React from 'react'

const OvercastNightSVG = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
	<defs>
		<linearGradient id="OvercastNightSVGa" x1="13.58" y1="15.57" x2="24.15" y2="33.87" gradientUnits="userSpaceOnUse">
			<stop offset="0" stop-color="#86c3db"/>
			<stop offset="0.45" stop-color="#86c3db"/>
			<stop offset="1" stop-color="#5eafcf"/>
			<animateTransform attributeName="gradientTransform" type="rotate" values="10 19.22 24.293; -10 19.22 24.293; 10 19.22 24.293" dur="10s" repeatCount="indefinite"/>
		</linearGradient>
		<linearGradient id="OvercastNightSVGb" x1="40.76" y1="23" x2="50.83" y2="40.46" gradientUnits="userSpaceOnUse">
			<stop offset="0" stop-color="#9ca3af"/>
			<stop offset="0.45" stop-color="#9ca3af"/>
			<stop offset="1" stop-color="#6b7280"/>
		</linearGradient>
		<linearGradient id="OvercastNightSVGc" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
			<stop offset="0" stop-color="#f3f7fe"/>
			<stop offset="0.45" stop-color="#f3f7fe"/>
			<stop offset="1" stop-color="#deeafb"/>
		</linearGradient>
	</defs>
	<path d="M29.33,26.68A10.61,10.61,0,0,1,18.65,16.14,10.5,10.5,0,0,1,19,13.5,10.54,10.54,0,1,0,30.5,26.61,11.48,11.48,0,0,1,29.33,26.68Z" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" fill="url(#OvercastNightSVGa)">
		<animateTransform attributeName="transform" type="rotate" values="-10 19.22 24.293; 10 19.22 24.293; -10 19.22 24.293" dur="10s" repeatCount="indefinite"/>
	</path>
	<path d="M34.23,33.45a4.05,4.05,0,0,0,4.05,4H54.79a4.34,4.34,0,0,0,.81-8.61,3.52,3.52,0,0,0,.06-.66,4.06,4.06,0,0,0-6.13-3.48,6.08,6.08,0,0,0-11.25,3.19,6.34,6.34,0,0,0,.18,1.46h-.18A4.05,4.05,0,0,0,34.23,33.45Z" stroke="#848b98" stroke-miterlimit="10" stroke-width="0.5" fill="url(#OvercastNightSVGb)">
		<animateTransform attributeName="transform" type="translate" values="-2.1 0; 2.1 0; -2.1 0" dur="7s" repeatCount="indefinite"/>
	</path>
	<path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z" stroke="#e6effc" stroke-miterlimit="10" stroke-width="0.5" fill="url(#OvercastNightSVGc)">
		<animateTransform attributeName="transform" type="translate" values="-3 0; 3 0; -3 0" dur="7s" repeatCount="indefinite"/>
	</path>
</svg>
  )
}

export default OvercastNightSVG