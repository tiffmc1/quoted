import "./globals.css";
import { Inter } from "next/font/google";
import { AuthContextProvider } from "./firebase/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Quoted",
	description: "Application for creating and liking quotes",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AuthContextProvider>{children}</AuthContextProvider>
			</body>
		</html>
	);
}
