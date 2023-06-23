"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import login from "@/app/firebase/auth/login";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();

	const handleSubmit = async (event) => {
		event.preventDefault();

		const { result, error } = await login(email, password);

		if (error) {
			return console.log("Login Component Error", error);
		}

		console.log("Login Component Successful", result);
		return router.push("/user");
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					required
					name="email"
					placeholder="Email"
					type="email"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					required
					name="password"
					placeholder="Password"
					type="password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button
					type="submit"
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
				>
					Log In
				</button>
			</form>

			<div>New Here?</div>
			<div>
				<Link href="/signup">SIGN UP</Link>
			</div>
		</>
	);
}
