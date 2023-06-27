"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config.js";

const AuthContext = createContext(undefined);

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const currUser = auth.currentUser;
	const value = user;

	// useEffect(() => {
	// 	if (currUser) {
	// 		const userQuery = query(
	// 			collection(db, "users"),
	// 			where("uid", "==", user.uid)
	// 		);

	// 		onSnapshot(userQuery, (snapshot) => {
	// 			snapshot.forEach((doc) => {
	// 				setUser({ ...doc.data(), id: doc.id });
	// 			});
	// 		});
	// 	}
	// }, [currUser, user]);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (currUser) {
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
	}, [currUser]);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useUserData = () => {
	const context = useContext(AuthContext);

	if (context === undefined) {
		throw new Error("userData must be used within an Auth Context Provider");
	}
	return context;
};
