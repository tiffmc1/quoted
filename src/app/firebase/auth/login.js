import { auth } from "../config.js";
import { signInWithEmailAndPassword } from "firebase/auth";

export default async function login(email, password) {
	let result = null;
	let error = null;

	try {
		result = await signInWithEmailAndPassword(auth, email, password);
	} catch (err) {
		error = err;
	}

	return { result, error };
}
