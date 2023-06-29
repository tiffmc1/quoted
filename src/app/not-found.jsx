"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import errorImg from "../../public/images/error.jpg";

const errorReasons = [
	{
		id: 1,
		reason: "The URL address is not correct",
	},
	{
		id: 2,
		reason: "You do not have access to that page",
	},
	{
		id: 3,
		reason: "You do not have an account with us",
	},
];

export default function NotFoundPage() {
	const router = useRouter();
	return (
		<main className="flex flex-col items-center p-5">
			<div className="font-bold py-3">Oops! Something Went Wrong!</div>
			<div className="flex flex-col">
				There&apos;s a few possibilites for this:
				{errorReasons.map((error) => (
					<li type="1" key={error.id}>
						{error.reason}
					</li>
				))}
			</div>
			<div className="text-center py-3">
				Please{" "}
				<Link href="/" className="underline">
					return to the homepage
				</Link>{" "}
				to either create an account or log in
			</div>
			<Image src={errorImg} alt="Error Image" height={250} width={250} />
		</main>
	);
}
