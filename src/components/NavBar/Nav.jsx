"use client";
import React from "react";
import NavModal from "./NavModal";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
	const path = usePathname();
	const ref = "/user";

	return (
		<div>
			{path === ref ? (
				<div className="flex flex-row justify-end p-4">
					<NavModal />
				</div>
			) : (
				<div className="flex flex-row justify-between p-4">
					<Link href="/user/main-feed">Home</Link>
					<NavModal />
				</div>
			)}
		</div>
	);
}
