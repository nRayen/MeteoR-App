import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import { Suspense } from "react";
import Loader from "./Loader";



export default async function Home({ params }) {
	const city = decodeURI(params.ville);
	return (
		<body>
			<Header />

			<Suspense fallback={<Loader/>}>
				<Main city={city}/>
			</Suspense>

			<Footer />
			{/* {
				menuIsOpen ? <Menu onHandleMenu={handleMenu}/> : null
			} */}
		</body>
	);
}
