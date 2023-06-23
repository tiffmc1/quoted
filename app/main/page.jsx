"use client";
import React, { useEffect } from "react";
import { useAuthContext } from "../firebase/context/AuthContext";
import { useRouter } from "next/navigation";
import Main from "../components/Main";

export default function MainPage() {
	const { user } = useAuthContext();
	const router = useRouter();

	useEffect(() => {
		if (!user) router.push("/");
	}, [user, router]);

	return (
		<>{user ? <Main /> : <div>Only logged in uses can view this page</div>}</>
	);
}
