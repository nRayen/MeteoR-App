const FogSVG = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64">
	<defs>
		<linearGradient id="FogSVGa" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
			<stop offset="0" stop-color="#f3f7fe"/>
			<stop offset="0.45" stop-color="#f3f7fe"/>
			<stop offset="1" stop-color="#deeafb"/>
		</linearGradient>
		<linearGradient id="FogSVGb" x1="27.5" y1="50.21" x2="36.5" y2="65.79" gradientUnits="userSpaceOnUse">
			<stop offset="0" stop-color="#d4d7dd"/>
			<stop offset="0.45" stop-color="#d4d7dd"/>
			<stop offset="1" stop-color="#bec1c6"/>
		</linearGradient>
		<linearGradient id="FogSVGc" y1="44.21" y2="59.79" xlinkHref="#FogSVGb"/>
	</defs>
	<path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z" stroke="#e6effc" stroke-miterlimit="10" stroke-width="0.5" fill="url(#FogSVGa)"/>
	<line x1="17" y1="58" x2="47" y2="58" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" stroke="url(#FogSVGb)">
		<animateTransform attributeName="transform" type="translate" values="-4 0; 4 0; -4 0" dur="5s" begin="0s" repeatCount="indefinite"/>
	</line>
	<line x1="17" y1="52" x2="47" y2="52" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" stroke="url(#FogSVGc)">
		<animateTransform attributeName="transform" type="translate" values="-4 0; 4 0; -4 0" dur="5s" begin="-4s" repeatCount="indefinite"/>
	</line>
</svg>

  )
}

export default FogSVG