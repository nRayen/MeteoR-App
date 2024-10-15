"use client"

import { useState } from "react";

import CrossSVG from "./svg/CrossSVG";
import FavoriteSVG from "./svg/FavoriteSVG";
import Link from "next/link";

const Menu = ({menuIsOpen, onHandleMenu}) => {
	const [favorites, setFavorites] = useState(["Paris", "Bamako","Dubai","Dakar", "Hanoi"]);

	return (
		<menu className={menuIsOpen ? "menu visible" : "menu"}>

            <div className="wrapper">
			    <h2>Favoris</h2>
			    <ul>
				    {favorites.map((fav, index) => (
                        <li className="favorite" key={index}><Link href={"/"+fav}>{fav}</Link><FavoriteSVG/></li>
				    ))}
			    </ul>
            </div>

			<button className="close-menu" aria-label="close-menu" onClick={onHandleMenu} >
				<CrossSVG/>
			</button>
		</menu>
	);
};

export default Menu;
