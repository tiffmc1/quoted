import Link from "next/link";
import SignUp from "../components/Auth/SignUp";
import OAuth from "../components/Auth/OAuth";

export default function SignUpPage() {
	return (
		<>
			<Link href="/">Back</Link>
			<SignUp />
			<OAuth />
		</>
	);
}
