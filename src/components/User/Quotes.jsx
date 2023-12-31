"use client";
import "../../app/globals.css";
import { useEffect, useState } from "react";
import { db } from "@/src/app/firebase/config";
import {
	collection,
	orderBy,
	query,
	onSnapshot,
	where,
	updateDoc,
	doc,
} from "firebase/firestore";
import Moment from "react-moment";
import "moment-timezone";
import Image from "next/image";
import defaultProfileImg from "../../../public/images/profile-img-default.png";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Quotes({ user, path }) {
	const [quotesList, setQuotesList] = useState([]);
	const [usersList, setUsersList] = useState([]);
	const [likes, setLikes] = useState(0);
	const [liked, setLiked] = useState(false);
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

		const getUsersList = async () => {
			onSnapshot(query(collection(db, "users")), (snapshot) => {
				setUsersList(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						...doc.data(),
					}))
				);
			});
		};

		getQuotesList();
		getUsersList();
	}, [path, user]);

	const handleClick = async (quote) => {
		console.log("handleClick", quote);
		// const quoteRef = doc(db, "quotes", quote.id);
		// console.log("quoteRef", quoteRef);

		if (liked) {
			setLikes(likes - 1);
			setLiked(false);
		} else {
			setLikes(likes + 1);
			setLiked(true);
		}

		// await updateDoc(quoteRef, {
		// 	likes: likes,
		// });
	};

	console.log(likes);

	return (
		<div className="py-4">
			{quotesList.length ? (
				<div
					className={
						quotesList.length === 1 ? "grid grid-cols-1" : "quotesGrid"
					}
				>
					{quotesList?.map((quote) =>
						usersList?.map((user) =>
							quote.uid === user.uid ? (
								<div key={quote.id} className="quotesBox">
									<div>
										{user.profileImg ? (
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
									<div>Author: {user?.name}</div>
									<Moment>{quote.created?.toDate()}</Moment>
									<div
										onClick={() => handleClick(quote)}
										className="flex flex-row justify-end"
									>
										{liked ? (
											<div>
												<FavoriteIcon />
												{quote.likes}
											</div>
										) : (
											<div>
												<FavoriteBorderOutlinedIcon />
												{quote.likes}
											</div>
										)}
									</div>
								</div>
							) : null
						)
					)}
				</div>
			) : (
				<div className="flex items-center justify-center">
					Looks like you don&apos;t have any quotes yet!
				</div>
			)}
		</div>
	);
}
