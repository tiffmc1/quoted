import React from "react";
import Link from "next/link";

export default function ProfilePage() {
	return (
		<div>
			<div className="flex flex-col items-center py-2">
				<div>Profile Image</div>
				<div>Account Information</div>
				<div>Name: Jane Doe</div>
				<div>Email: testing@email.com</div>
				<Link href="/user/quotes">Your Quotes</Link>
			</div>
		</div>
	);
}
