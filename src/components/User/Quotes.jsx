"use client";
import { useEffect, useState } from "react";
import { db } from "@/src/app/firebase/config";
import {
	collection,
	orderBy,
	query,
	onSnapshot,
	where,
} from "firebase/firestore";
import Moment from "react-moment";
import "moment-timezone";
import Image from "next/image";
import defaultProfileImg from "../../../public/images/profile-img-default.png";

export default function Quotes({ user, path }) {
	const [quotesList, setQuotesList] = useState([]);
	Moment.globalFormat = "MM/DD/YYYY hh:mm a";

	useEffect(() => {
		const getQuotesList = async () => {
			if (user && path === "/user/main-feed") {
				onSnapshot(
					query(collection(db, "quotes"), orderBy("created", "desc")),
					(snapshot) => {
						setQuotesList(
							snapshot.docs.map((doc) => ({
								id: doc.id,
								...doc.data(),
							}))
						);
					}
				);
			} else if (user && path === "/user/quotes") {
				onSnapshot(
					query(
						collection(db, "quotes"),
						where("uid", "==", user.uid),
						orderBy("created", "desc")
					),
					(snapshot) => {
						setQuotesList(
							snapshot.docs.map((doc) => ({
								id: doc.id,
								...doc.data(),
							}))
						);
					}
				);
			}
		};
		getQuotesList();
	}, [user, path]);

	return (
		<div className="p-4">
			{quotesList.length ? (
				<div className="quotesGrid">
					{quotesList.map((quote) => (
						<div key={quote.id} className="quotesBox">
							<div>
								{user?.profileImg && quote.author === user.name ? (
									<Image
										src={user.profileImg}
										alt="User profile image"
										height={100}
										width={100}
										className="user-image"
									/>
								) : (
									<Image
										src={defaultProfileImg}
										alt="User profile image"
										height={100}
										width={100}
										className="user-image"
									/>
								)}
							</div>

							<div className="italic">&quot;{quote.quote}&quot;</div>
							<div>Author: {quote.author}</div>
							<Moment>{quote.created?.toDate()}</Moment>
							<div className="text-right">{quote.likes}</div>
						</div>
					))}
				</div>
			) : (
				<div className="flex items-center justify-center">
					Looks like you don&apos;t have any quotes yet!
				</div>
			)}
		</div>
	);
}
