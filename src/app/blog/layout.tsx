import React from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

function BlogLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default BlogLayout;
