import React from "react";

export default function Footer() {
	return (
		<footer>
			<div className="flex justify-center text-sm py-3">
				{new Date().getFullYear()} &copy; Quoted. All Rights Reserved.
			</div>
		</footer>
	);
}
