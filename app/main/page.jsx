"use client";
import React, { useEffect } from "react";
import { useAuthContext } from "../firebase/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Main() {
	const { user } = useAuthContext();
	const router = useRouter();

	useEffect(() => {
		if (!user) router.push("/");
	}, [user, router]);

	return (
		<>
			{user ? (
				<div>Main Page</div>
			) : (
				<div>Only logged in uses can view this page</div>
			)}
		</>
	);
}
