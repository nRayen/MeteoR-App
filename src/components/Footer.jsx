const Footer = () => {
	const date = new Date()
	const year = date.getUTCFullYear();

	return (
		<footer>
			<div className="credits">
				<p>© {year} - MeteoR by <a href="https://github.com/nRayen">nRayen</a></p>
			</div>
		</footer>
	);
};

export default Footer;
