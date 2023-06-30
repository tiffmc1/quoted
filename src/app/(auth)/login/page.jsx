"use client";
import Link from "next/link";
import Login from "@/src/components/Auth/Login";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function LoginPage() {
	return (
		<>
			<div className="p-4">
				<Link href="/">
					<ArrowBackIosNewIcon />
				</Link>
			</div>
			<div className="font-bold text-2xl text-center py-6">Login</div>
			<Login />
		</>
	);
}
