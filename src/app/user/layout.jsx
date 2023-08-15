import Nav from "@/src/components/NavBar/Nav";
import Footer from "@/src/components/Footer";

export default function UserLayout({ children }) {
	return (
		<div className="h-screen flex flex-col justify-between">
			<div>
				<Nav />
			</div>
			<div className="flex flex-col justify-start h-full">{children}</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}
