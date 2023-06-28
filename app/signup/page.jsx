import Link from "next/link";
import SignUp from "../components/Auth/SignUp";

export default function SignUpPage() {
	return (
		<>
			<Link href="/">Back</Link>
			<SignUp />
		</>
	);
}
