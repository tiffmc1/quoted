import React from "react";
import Quotes from "@/app/components/User/Quotes";

export default function QuotesPage() {
	return (
		<>
			<div className="text-center font-semibold">
				{/* replace with user's name */}Username&apos;s Quotes History
			</div>
			<Quotes />
		</>
	);
}
