"use client";
import { useState } from "react";
import { db } from "@/app/firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function CreateQuote({ user }) {
	const [createQuote, setCreateQuote] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();

		await addDoc(collection(db, "quotes"), {
			created: serverTimestamp(),
			likes: 0,
			quote: createQuote,
			uid: user.uid,
		});

		setCreateQuote("");
	};

	return (
		<div>
			<div>Create Quote</div>
			<form onSubmit={handleSubmit}>
				<input
					required
					type="text"
					placeholder="Type Your Quote Here"
					onChange={(e) => setCreateQuote(e.target.value)}
				/>
				<button type="submit">Create</button>
			</form>
		</div>
	);
}
