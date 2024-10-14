import LoupeSVG from "./svg/LoupeSVG";
import FaviconSVG from "./svg/FaviconSVG";

function HomeMain () {

  // Focus sur la barre de recherche
	const focusSearchBar = () => {
    document.querySelector("#searchInput").focus();
	}


  return (
    <main className="noCity">
        <button onClick={focusSearchBar}>Recherchez votre ville<LoupeSVG/></button>
        {/* <p>ou</p>
        <button onClick={locateUserr}>Localisez vous<LocateSVG/></button> */}
        <FaviconSVG/>
    </main>
  )
}

export default HomeMain