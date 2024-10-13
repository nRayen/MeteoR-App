
const SnowSVG = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64">
	<defs>
		<linearGradient id="SnowSVGa" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
			<stop offset="0" stop-color="#f3f7fe"/>
			<stop offset="0.45" stop-color="#f3f7fe"/>
			<stop offset="1" stop-color="#deeafb"/>
		</linearGradient>
		<linearGradient id="SnowSVGb" x1="30.12" y1="43.48" x2="31.88" y2="46.52" gradientUnits="userSpaceOnUse">
			<stop offset="0" stop-color="#86c3db"/>
			<stop offset="0.45" stop-color="#86c3db"/>
			<stop offset="1" stop-color="#5eafcf"/>
		</linearGradient>
		<linearGradient id="SnowSVGc" x1="29.67" y1="42.69" x2="32.33" y2="47.31" xlinkHref="#SnowSVGb"/>
		<linearGradient id="SnowSVGd" x1="23.12" y1="43.48" x2="24.88" y2="46.52" xlinkHref="#SnowSVGb"/>
		<linearGradient id="SnowSVGe" x1="22.67" y1="42.69" x2="25.33" y2="47.31" xlinkHref="#SnowSVGb"/>
		<linearGradient id="SnowSVGf" x1="37.12" y1="43.48" x2="38.88" y2="46.52" xlinkHref="#SnowSVGb"/>
		<linearGradient id="SnowSVGg" x1="36.67" y1="42.69" x2="39.33" y2="47.31" xlinkHref="#SnowSVGb"/>
	</defs>
	<path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z" stroke="#e6effc" stroke-miterlimit="10" stroke-width="0.5" fill="url(#SnowSVGa)"/>
	<g>
		<circle cx="31" cy="45" r="1.25" fill="none" stroke-miterlimit="10" stroke="url(#SnowSVGb)"/>
		<path d="M33.17,46.25l-1.09-.63m-2.16-1.24-1.09-.63M31,42.5v1.25m0,3.75V46.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke="url(#SnowSVGc)"/>
		<animateTransform attributeName="transform" type="translate" additive="sum" values="-1 -6; 1 12" dur="4s" repeatCount="indefinite"/>
		<animateTransform attributeName="transform" type="rotate" additive="sum" values="0 31 45; 360 31 45" dur="9s" repeatCount="indefinite"/>
		<animate attributeName="opacity" values="0;1;1;1;0" dur="4s" repeatCount="indefinite"/>
	</g>
	<g>
		<circle cx="24" cy="45" r="1.25" fill="none" stroke-miterlimit="10" stroke="url(#SnowSVGd)"/>
		<path d="M26.17,46.25l-1.09-.63m-2.16-1.24-1.09-.63M24,42.5v1.25m0,3.75V46.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke="url(#SnowSVGe)"/>
		<animateTransform attributeName="transform" type="translate" additive="sum" values="1 -6; -1 12" begin="-2s" dur="4s" repeatCount="indefinite"/>
		<animateTransform attributeName="transform" type="rotate" additive="sum" values="0 24 45; 360 24 45" dur="9s" repeatCount="indefinite"/>
		<animate attributeName="opacity" values="0;1;1;1;0" begin="-2s" dur="4s" repeatCount="indefinite"/>
	</g>
	<g>
		<circle cx="38" cy="45" r="1.25" fill="none" stroke-miterlimit="10" stroke="url(#SnowSVGf)"/>
		<path d="M40.17,46.25l-1.09-.63m-2.16-1.24-1.09-.63M38,42.5v1.25m0,3.75V46.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke="url(#SnowSVGg)"/>
		<animateTransform attributeName="transform" type="translate" additive="sum" values="1 -6; -1 12" begin="-1s" dur="4s" repeatCount="indefinite"/>
		<animateTransform attributeName="transform" type="rotate" additive="sum" values="0 38 45; 360 38 45" dur="9s" repeatCount="indefinite"/>
		<animate attributeName="opacity" values="0;1;1;1;0" begin="-1s" dur="4s" repeatCount="indefinite"/>
	</g>
</svg>

  )
}

export default SnowSVG