import Main from "../components/Main";
import Nav from "../components/NavBar/Nav";
import Footer from "../components/Footer";

export default function MainPage() {
	return (
		<div className="h-screen flex flex-col justify-between">
			<Nav />
			<Main />
			<Footer />
		</div>
	);
}
