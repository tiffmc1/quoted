"use client";
import Link from "next/link";
import SignUp from "@/src/components/Auth/SignUp";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function SignUpPage() {
	return (
		<>
			<div className="p-4">
				<Link href="/">
					<ArrowBackIosNewIcon />
				</Link>
			</div>
			<div className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl text-center py-6">
				Sign Up
			</div>
			<SignUp />
		</>
	);
}
