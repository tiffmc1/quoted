"use client";
import "../../app/globals.css";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import login from "@/src/app/firebase/auth/login";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const router = useRouter();

	const handleSubmit = async (event) => {
		event.preventDefault();

		const { result, error } = await login(email, password);

		setErrorMessage("");
		if (error) {
			setErrorMessage("Incorrect Password. Please Try Again.");
			return;
		}

		console.log("Login Component Successful", result);
		return router.push("/user/main-feed");
	};

	return (
		<div className="flex flex-col items-center">
			<form onSubmit={handleSubmit} className="form-container">
				<input
					required
					name="email"
					placeholder="Email"
					type="email"
					onChange={(e) => setEmail(e.target.value)}
					className="form-input peer"
				/>
				<p className="invisible peer-invalid:visible text-red-600 text-sm">
					Please provide a valid email address.
				</p>
				<input
					required
					name="password"
					placeholder="Password"
					type="password"
					onChange={(e) => setPassword(e.target.value)}
					className="form-input"
				/>
				{errorMessage && (
					<div className="text-red-600 text-sm">{errorMessage}</div>
				)}
				<button>Log In</button>
			</form>

			<div className="mt-5">
				<div>New Here?</div>
				<div>
					<Link href="/signup" className="text-warm_purple font-bold">
						SIGN UP
					</Link>
				</div>
			</div>
		</div>
	);
}
