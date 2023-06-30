"use client";
import "../../../globals.css";
import { useRef } from "react";
import { db } from "@/src/app/firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { UserData } from "@/src/app/firebase/context/AuthContext";
import { useRouter } from "next/navigation";

export default function CreateQuotePage() {
	const { user } = UserData();
	const inputRef = useRef();
	const router = useRouter();

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
		router.back();
	};

	return (
		<div>
			<div className="font-bold text-2xl py-4 text-center">Create Quote</div>
			<form onSubmit={handleSubmit} className="form-container">
				<input
					required
					type="text"
					placeholder="Type Your Quote Here"
					ref={inputRef}
					className="form-input"
				/>
				<button onClick={handleSubmit}>Create</button>
			</form>
		</div>
	);
}
