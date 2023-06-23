"use client";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { getDocs, collection } from "firebase/firestore";

export default function Main() {
	const [quotesList, setQuotesList] = useState([]);

	// const quotesColRef = collection(db, "quotes");

	// useEffect(() => {
	// 	const getQuotesList = async () => {
	// 		try {
	// 			const data = await getDocs(quotesColRef);
	// 			const filteredData = data.docs.map((doc) => ({
	// 				...doc.data(),
	// 				id: doc.id,
	// 			}));

	// 			setQuotesList(filteredData);
	// 		} catch (err) {
	// 			console.error(err);
	// 		}
	// 	};
	// 	getQuotesList();
	// }, [quotesColRef]);

	return (
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
	);
}
