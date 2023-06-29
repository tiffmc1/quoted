"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import { UserData } from "./firebase/context/AuthContext";
import { useEffect } from "react";
import logo from "../../public/images/full_logo_transparent_no_buffer.png";

export default function Home() {
	// const { user } = UserData();
	// const router = useRouter();

	// console.log("look here", user);
	// useEffect(() => {
	// 	if (!user) console.log("you shall not pass");
	// }, [user]);

	return (
		<>
			<div className="h-screen flex flex-col items-center justify-center">
				<div className="w-[75%] basis-1/2 flex items-center justify-center">
					<Image src={logo} alt="Quoted Logo" height={300} width={300} />
				</div>

				<div className="basis-1/2 flex flex-col">
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">
						<Link href="/login">Login</Link>
					</button>

					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">
						<Link href="/signup" className="">
							Sign Up
						</Link>
					</button>
				</div>
			</div>
			<Footer />
		</>
	);
}
