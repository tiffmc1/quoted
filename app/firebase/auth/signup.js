import { auth, db } from "../config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

export default async function signUp(userName, email, password) {
	let result = null;
	let error = null;

	try {
		const createdUser = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);

		const user = createdUser.user.uid;
		console.log("sign up", user);
		result = await addDoc(collection(db, "users"), {
			uid: user,
			email: email,
			name: userName,
			profileImg: "",
		});
	} catch (err) {
		error = err;
	}

	return { result, error };
}
