"use client";
import "../../app/globals.css";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import signUp from "@/src/app/firebase/auth/signup";

export default function SignUp() {
	const [authorName, setAuthorName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();

	const handleSubmit = async (event) => {
		event.preventDefault();

		const { result, error } = await signUp(authorName, email, password);

		if (error) {
			console.error("Sign Up Error", error);
		}

		console.log("SignUp Component Successful", result);
		return router.push("/user/profile");
	};

	return (
		<div className="flex flex-col items-center">
			<form onSubmit={handleSubmit} className="form-container">
				<input
					required
					name="name"
					placeholder="Username"
					type="text"
					onChange={(e) => setAuthorName(e.target.value)}
					className="form-input"
				/>
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
				<button>Sign Up</button>
			</form>
			<div className="mt-5">
				<div>Already A Member?</div>
				<div>
					<Link href="/login" className="text-warm_purple font-bold">
						LOG IN
					</Link>
				</div>
			</div>
		</div>
	);
}
