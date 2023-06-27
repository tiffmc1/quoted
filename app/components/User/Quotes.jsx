"use client";
import { useState, useEffect } from "react";
import { db } from "@/app/firebase/config";
import {
	onSnapshot,
	collection,
	query,
	where,
	orderBy,
	addDoc,
	serverTimestamp,
} from "firebase/firestore";
import { UserData } from "@/app/firebase/context/AuthContext";
import Moment from "react-moment";
import moment from "moment/min/moment-with-locales";
import "moment-timezone";

export default function Quotes() {
	const { user } = UserData();
	const [userQuotes, setUserQuotes] = useState([]);
	const [createQuote, setCreateQuote] = useState("");
	Moment.globalMoment = moment;
	Moment.globalFormat = "MM/DD/YYYY hh:mm a";

	console.log("quotes page", user);

	useEffect(() => {
		if (user) {
			onSnapshot(
				query(
					collection(db, "quotes"),
					where("uid", "==", user.uid),
					orderBy("created", "desc")
				),
				(snapshot) => {
					setUserQuotes(
						snapshot.docs.map((doc) => ({
							id: doc.id,
							...doc.data(),
						}))
					);
				}
			);
		}
	}, [user]);

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

	console.log(userQuotes);

	return (
		<div className="p-4">
			<div className="quotes-grid">
				{userQuotes?.map((quote) => (
					<div key={quote.id} className="quotes-box">
						<div>{/* insert user profile pic */}Profile Pic!</div>
						<div className="text-center">{quote.quote}</div>
						<div>{user?.name}</div>
						<div>{quote.likes}</div>
						<Moment>{quote.created?.toDate()}</Moment>
					</div>
				))}
			</div>

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
