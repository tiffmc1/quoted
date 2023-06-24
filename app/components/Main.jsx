"use client";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { getDocs, collection } from "firebase/firestore";

export default function Main() {
	const [quotesList, setQuotesList] = useState([]);

	useEffect(() => {
		const getQuotesList = async () => {
			try {
				const quotesColRef = collection(db, "quotes");
				const quotesData = await getDocs(quotesColRef);
				const filteredQuotes = quotesData.docs.map((doc) => ({
					...doc.data(),
					id: doc.id,
				}));

				setQuotesList(filteredQuotes);
			} catch (err) {
				console.error(err);
			}
		};
		getQuotesList();
	}, []);

	return (
		<div className="p-4">
			<div className="quotes-grid">
				{quotesList.map((quote) => (
					<div key={quote.id} className="quotes-box">
						<div>{/* insert user profile pic */}Profile Pic!</div>
						<div className="text-center">{quote.quote}</div>
						<div>{quote.author}</div>
						<div>{quote.likes}</div>
						<div>
							{/* insert timestamp & sort from most recent quote to least recent */}
							Timestamp
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
