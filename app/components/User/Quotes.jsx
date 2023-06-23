import React from "react";
import { quotesList } from "../../../seed.js";

export default function Quotes() {
	return (
		<div className="p-4">
			<div className="quotes-grid">
				{quotesList.map((quote) => (
					<div key={quote.id} className="quotes-box">
						<div>{/* insert user profile pic */}Profile Pic!</div>
						<div className="text-center">{quote.quote}</div>
						<div>{quote.author}</div>
						<div>{quote.likes}</div>
						<div>{quote.timestamp}</div>
					</div>
				))}
			</div>
		</div>
	);
}
