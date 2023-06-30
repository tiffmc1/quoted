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
		<>
			<form onSubmit={handleSubmit} className="form-container">
				<input
					required
					name="email"
					placeholder="Email"
					type="email"
					onChange={(e) => setEmail(e.target.value)}
					className="form-input"
				/>
				<input
					required
					name="password"
					placeholder="Password"
					type="password"
					onChange={(e) => setPassword(e.target.value)}
					className="form-input"
				/>
				{errorMessage && <div>{errorMessage}</div>}
				<button>Log In</button>
			</form>

			<div className="pt-4 ml-6">
				<div>New Here?</div>
				<div>
					<Link href="/signup" className="text-warm_purple font-bold">
						SIGN UP
					</Link>
				</div>
			</div>
		</>
	);
}
