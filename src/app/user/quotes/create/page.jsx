"use client";
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
			<div className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl py-4 text-center">
				Create Quote
			</div>
			<div className="flex flex-col items-center">
				<form
					onSubmit={handleSubmit}
					className="flex flex-col items-center bg-purple-200 border border-black w-[20rem] sm:w-[25rem] md:w-[30rem] lg:w-[35rem] rounded-lg py-9"
				>
					<input
						required
						type="text"
						placeholder="Type Your Quote Here"
						ref={inputRef}
						className="border border-black rounded-lg h-[200px] w-[15rem]"
					/>
					<button onClick={handleSubmit}>Create</button>
				</form>
			</div>
		</div>
	);
}
