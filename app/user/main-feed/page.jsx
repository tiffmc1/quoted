"use client";
import { UserData } from "@/app/firebase/context/AuthContext";
import Quotes from "@/app/components/User/Quotes";
import { usePathname } from "next/navigation";

export default function MainFeedPage() {
	const { user } = UserData();
	const path = usePathname();

	return (
		<div>
			<Quotes user={user} path={path} />
		</div>
	);
}
