import "../globals.css";
import { Inter } from "next/font/google";
import Nav from "../components/NavBar/Nav";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Quoted",
	description: "User",
};

export default function UserLayout({ children }) {
	return (
		<div className="h-screen flex flex-col justify-between">
			<Nav />
			<main>{children}</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}
