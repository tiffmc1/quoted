"use client";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { getDocs, collection } from "firebase/firestore";

export default function Main() {
	const [quotesList, setQuotesList] = useState([]);

	const quotesColRef = collection(db, "quotes");

	useEffect(() => {
		const getQuotesList = async () => {
			try {
				const data = await getDocs(quotesColRef);
				const filteredData = data.docs.map((doc) => ({
					...doc.data(),
					id: doc.id,
				}));

				setQuotesList(filteredData);
			} catch (err) {
				console.error(err);
			}
		};
		getQuotesList();
	}, [quotesColRef]);

	return (
		<div className="quotes-grid">
			{quotesList.map((quote) => (
				<div key={quote.id} className="quotes-box">
					<div className="text-center">{quote.quote}</div>
					<div className="">{quote.likes}</div>
				</div>
			))}
		</div>
	);
}
