"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/app/firebase/config";
import { onSnapshot, collection, query, where } from "firebase/firestore";

const AuthContext = createContext(undefined);

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const value = user;

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const userQuery = query(
					collection(db, "users"),
					where("uid", "==", user.uid)
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

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useUserData = () => {
	const context = useContext(AuthContext);

	if (context === undefined) {
		throw new Error("userData must be used within an Auth Context Provider");
	}
	return context;
};
