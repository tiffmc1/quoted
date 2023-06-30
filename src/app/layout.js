import { Montserrat } from "next/font/google";
import { AuthContextProvider } from "./firebase/context/AuthContext";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export const metadata = {
	title: "Quoted",
	description: "Application for creating and liking quotes",
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={`${montserrat.variable} font-mont bg-white w-full min-h-screen scroll-smooth`}
		>
			<body>
				<AuthContextProvider>{children}</AuthContextProvider>
			</body>
		</html>
	);
}
