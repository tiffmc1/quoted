import { auth } from "../config";
import { signOut } from "firebase/auth";

export default async function signout() {
	let result = null;
	let error = null;

	try {
		result = await signOut(auth);
	} catch (err) {
		error = err;
	}

	return { result, error };
}
