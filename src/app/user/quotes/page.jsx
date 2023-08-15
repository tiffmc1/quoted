"use client";
import Quotes from "@/src/components/User/Quotes";
import { UserData } from "@/src/app/firebase/context/AuthContext";
import { usePathname } from "next/navigation";

export default function QuotesPage() {
	const { user } = UserData();
	const path = usePathname();

	return (
		<div className="flex flex-col items-center">
			<div className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl py-4">
				{`${user && user.name}'s Quote History`}
			</div>
			<Quotes user={user} path={path} />
		</div>
	);
}
