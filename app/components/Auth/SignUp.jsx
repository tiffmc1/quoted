import { useState } from "react";
import Link from "next/link";

export default function SignUp() {
	const [signUpForm, setSignUpForm] = useState({
		email: "",
		password: "",
		confirmPassword: "",
	});

	const handleSubmit = () => {
		console.log("submitted");
	};

	const handleChange = (event) => {
		setSignUpForm((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};

	return (
		<>
			<form>
				<input
					required
					name="email"
					placeholder="Email"
					type="email"
					onChange={handleChange}
				/>
				<input
					required
					name="password"
					placeholder="Password"
					type="password"
					onChange={handleChange}
				/>
				<input
					required
					name="password"
					placeholder="Confirm Password"
					type="password"
					onChange={handleChange}
				/>
				<button
					type="submit"
					onSubmit={handleSubmit}
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
