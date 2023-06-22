"use client";
import Link from "next/link";
import Login from "../components/Auth/Login";

export default function LoginPage() {
	return (
		<>
			<Link href="/">Back</Link>
			<div>Login</div>
			<Login />
		</>
	);
}
