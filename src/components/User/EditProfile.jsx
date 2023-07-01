"use client";
import "../../app/globals.css";
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/src/app/firebase/config";

export default function EditProfile({ user, setOpenProfileEdit }) {
	const [formData, setFormData] = useState({
		name: user.name,
		email: user.email,
	});
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		const userRef = doc(db, "users", user.id);

		await updateDoc(userRef, {
			name: formData.name,
			email: formData.email,
		});

		setIsLoading(false);
		setOpenProfileEdit(false);
	};

	return (
		<form onSubmit={handleSubmit} className="form-container">
			<label htmlFor="name">Name: </label>
			<input
				required
				type="text"
				id="name"
				name="name"
				value={formData.name}
				onChange={handleChange}
				className="form-input"
			/>
			<label htmlFor="email">Email: </label>
			<input
				required
				type="email"
				id="email"
				name="email"
				value={formData.email}
				onChange={handleChange}
				className="form-input"
			/>
			<button onClick={handleSubmit}>Save</button>
			{isLoading && <div>Loading...</div>}
			<button onClick={() => setOpenProfileEdit(false)}>Cancel</button>
		</form>
	);
}
