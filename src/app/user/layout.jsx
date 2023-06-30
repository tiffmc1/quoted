import Nav from "@/src/components/NavBar/Nav";
import Footer from "@/src/components/Footer";

export default function UserLayout({ children }) {
	return (
		<>
			<div className="h-screen flex flex-col justify-between">
				<Nav />
				<main>{children}</main>
				<footer>
					<Footer />
				</footer>
			</div>
		</>
	);
}
