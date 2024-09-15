import FaviconSVG from "./svg/FaviconSVG";

const Footer = () => {
	const date = new Date()
	const year = date.getUTCFullYear();

	return (
		<footer>
			<div className="credits">
				<FaviconSVG alt="logo" />
				<p>© {year} - MeteoR</p>
				<p>
					by <a href="https://github.com/nRayen">nRayen</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
