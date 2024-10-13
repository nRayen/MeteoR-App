import { getCity } from "@/utils/getData";
import LocateSVG from "./svg/LocateSVG";
import LoupeSVG from "./svg/LoupeSVG";

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
    </main>
  )
}

export default HomeMain