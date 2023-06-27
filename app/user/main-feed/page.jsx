"use client";
import React, { useEffect, useState } from "react";
import { db } from "@/app/firebase/config";
import { getDocs, collection, orderBy, query } from "firebase/firestore";
import { UserData } from "@/app/firebase/context/AuthContext";
import Moment from "react-moment";
import moment from "moment/min/moment-with-locales";
import "moment-timezone";
import Image from "next/image";
import defaultProfileImg from "../../../public/images/profile-img-default.png";

export default function MainFeedPage() {
	const { user } = UserData();
	const [quotesList, setQuotesList] = useState([]);
	Moment.globalMoment = moment;
	Moment.globalFormat = "MM/DD/YYYY hh:mm a";

	console.log("main-feed page", user);

	useEffect(() => {
		const getQuotesList = async () => {
			try {
				const quotesColRef = query(
					collection(db, "quotes"),
					orderBy("created", "desc")
				);
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
						<div>
							{/* {user ? (
								<Image
									src={user.profileImg}
									alt="User profile image"
									height={100}
									width={100}
								/>
							) : ( */}
							<Image
								src={defaultProfileImg}
								alt="User profile image"
								height={100}
								width={100}
							/>
							{/* )} */}
						</div>

						<div className="text-center">{quote.quote}</div>
						<div>{quote.author}</div>
						<div>{quote.likes}</div>
						<Moment>{quote.created?.toDate()}</Moment>
					</div>
				))}
			</div>
		</div>
	);
}
