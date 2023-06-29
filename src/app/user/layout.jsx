// "use client";
import "../globals.css";
import { Inter } from "next/font/google";
import Nav from "@/src/components/NavBar/Nav";
import Footer from "@/src/components/Footer";
// import { UserData } from "@/app/firebase/context/AuthContext";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function UserLayout({ children }) {
	// const { getUser } = UserData();
	// const [user, setUser] = useState({});
	// const router = useRouter();

	// useEffect(() => {
	// 	if (!!getUser) setUser(getUser);
	// 	else router.refresh();
	// }, [getUser, router]);

	// console.log(getUser);

	return (
		<>
			{/* {user && ( */}
			<div className="h-screen flex flex-col justify-between">
				<Nav />
				<main>{children}</main>
				<footer>
					<Footer />
				</footer>
			</div>
			{/* )} */}
		</>
	);
}
