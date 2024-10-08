"use client";
import { useState } from "react";
import FlecheDroiteSVG from "./svg/FlecheDroiteSVG";
import FlecheGaucheSVG from "./svg/FlecheGaucheSVG";

const daysOfWeek = ["Aujourd'hui", "Mardi", "Mercredi", "Jeudi", "Vendredi"];

const DateSelector = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	const handleClick = (index) => {
		setActiveIndex(index);
	};

	return (
		<div className="date">
			<div className="day-selector glass">
				{daysOfWeek.map((day, index) => (
					<button
						key={index}
						className={activeIndex === index ? "active" : ""}
						onClick={() => handleClick(index)}
					>
						{day}
					</button>
				))}
			</div>
		</div>
	);
};

export default DateSelector;
