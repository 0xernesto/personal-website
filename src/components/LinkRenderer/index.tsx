import React, { AnchorHTMLAttributes } from "react";

function LinkRenderer({
	href,
	children,
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
	return (
		<a href={href} target="_blank" rel="noreferrer">
			{children}
		</a>
	);
}

export default LinkRenderer;
