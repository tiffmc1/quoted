"use client";
import React from "react";
import Quotes from "@/app/components/User/Quotes";
import CreateQuote from "@/app/components/User/CreateQuote";
import { UserData } from "@/app/firebase/context/AuthContext";
import { usePathname } from "next/navigation";

export default function QuotesPage() {
	const { user } = UserData();
	const path = usePathname();

	return (
		<>
			<div className="text-center font-semibold">
				{user?.name}&apos;s Quote History
			</div>
			<Quotes user={user} path={path} />
			<CreateQuote user={user} />
		</>
	);
}
