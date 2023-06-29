"use client";
import { UserData } from "@/src/app/firebase/context/AuthContext";
import Quotes from "@/src/components/User/Quotes";
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
