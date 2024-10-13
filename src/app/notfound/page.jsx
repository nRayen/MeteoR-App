import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {

	return (
		<body>
			<Header/>
            <main className="notfound">
				<p>
					La page que vous cherchez n'existe pas.
				</p>
				<span>404</span>
			</main>
			<Footer/>
		</body>
	);
}
