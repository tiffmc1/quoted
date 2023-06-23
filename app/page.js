"use client";
import React, { useEffect } from "react";
import { useAuthContext } from "./firebase/context/AuthContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
	const { user } = useAuthContext();
	const router = useRouter();

	useEffect(() => {
		if (user) router.push("/main");
	}, [user, router]);

	return (
		<>
			{!user && (
				<div className="h-screen flex flex-col items-center justify-center">
					<div className="w-[50%] border border-red-500 basis-1/2 flex items-center justify-center">
						Quoted Logo Image
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
			)}
			<Footer />
		</>
	);
}
