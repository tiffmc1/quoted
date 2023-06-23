import { auth } from "../config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default async function signUp(email, password, confirmPassword) {
	let result = null;
	let error = null;

	try {
		// if (password !== confirmPassword) {
		// 	error = "Passwords do not match";
		// }

		result = await createUserWithEmailAndPassword(auth, email, password);
	} catch (err) {
		error = err;
	}

	return { result, error };
}
