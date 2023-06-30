"use client";
import Quotes from "@/src/components/User/Quotes";
import { UserData } from "@/src/app/firebase/context/AuthContext";
import { usePathname } from "next/navigation";

export default function QuotesPage() {
	const { user } = UserData();
	const path = usePathname();

	return (
		<>
			<div className="text-center font-bold text-xl py-3">
				{user?.name}&apos;s Quote History
			</div>
			<Quotes user={user} path={path} />
		</>
	);
}
