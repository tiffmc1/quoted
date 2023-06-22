import { useState } from "react";
import Link from "next/link";

export default function Login() {
	const [loginForm, setLoginForm] = useState({
		email: "",
		password: "",
	});

	const handleSubmit = () => {
		console.log("submitted");
	};

	const handleChange = (event) => {
		setLoginForm((prev) => ({
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
				<button
					type="submit"
					onSubmit={handleSubmit}
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
