"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import signUp from "@/app/firebase/auth/signup";

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
		<>
			<form onSubmit={handleSubmit}>
				<input
					required
					name="name"
					placeholder="User/Author Name For Profile"
					type="text"
					onChange={(e) => setAuthorName(e.target.value)}
				/>
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
				{/* <input
					required
					name="confirm-password"
					placeholder="Confirm Password"
					type="password"
					onChange={(e) => setConfirmPassword(e.target.value)}
				/> */}
				<button
					type="submit"
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
				>
					Sign Up
				</button>
			</form>

			<div>Already A Member?</div>
			<div>
				<Link href="/login">LOG IN</Link>
			</div>
		</>
	);
}
