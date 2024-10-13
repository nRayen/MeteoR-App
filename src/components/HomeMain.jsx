import { getCity } from "@/utils/getData";
import LocateSVG from "./svg/LocateSVG";
import LoupeSVG from "./svg/LoupeSVG";

async function HomeMain (locateUser, focusSearchBar) {

    let city
    async function locateUserr() {
		let lat, lon;
		navigator.geolocation.getCurrentPosition((position) => {
			lat = position.coords.latitude
			lon = position.coords.longitude
		})
        console.log(lat)
        // console.log(lon)
		// let city = await getCity([lat,lon])
		city = await getCity(lat,lon)
        console.log(city)
	}


  return (
    <main className="noCity">
        <button onClick={focusSearchBar}>Recherchez votre ville<LoupeSVG/></button>
        <p>ou</p>
        <button onClick={locateUserr}>Localisez vous<LocateSVG/></button>
    </main>
  )
}

export default HomeMain