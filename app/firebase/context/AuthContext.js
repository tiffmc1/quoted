"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/app/firebase/config";
import { onSnapshot, collection, query, where } from "firebase/firestore";

const AuthContext = createContext(undefined);

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			if (currentUser) {
				const userQuery = query(
					collection(db, "users"),
					where("uid", "==", currentUser.uid)
				);

				onSnapshot(userQuery, (snapshot) => {
					snapshot.forEach((doc) => {
						setUser({ ...doc.data(), id: doc.id });
					});
				});
			}
		});

		return () => unsubscribe();
	}, []);

	return (
		<AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
	);
};

export const UserData = () => {
	return useContext(AuthContext);
};
