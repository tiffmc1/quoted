"use client";
import { useRef } from "react";
import { db } from "@/src/app/firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function CreateQuote({ user }) {
	const inputRef = useRef();

	const handleSubmit = async (event) => {
		event.preventDefault();
		const inputQuote = inputRef.current.value;

		if (inputQuote === "") return;

		await addDoc(collection(db, "quotes"), {
			created: serverTimestamp(),
			likes: 0,
			quote: inputQuote,
			uid: user.uid,
			author: user.name,
		});

		inputRef.current.value = null;
	};

	return (
		<div className="flex flex-col items-center justify-center border border-gray-500">
			<div>Create Quote</div>
			<form onSubmit={handleSubmit}>
				<input
					required
					type="text"
					placeholder="Type Your Quote Here"
					ref={inputRef}
					className="border border-gray-500"
				/>
				<button onClick={handleSubmit}>Create</button>
			</form>
		</div>
	);
}
