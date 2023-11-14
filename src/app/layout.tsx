import "../styles/globals.css";

import type { Metadata } from "next";
import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";

export const metadata: Metadata = {
	title: "Ernesto Ramirez",
	description: "Personal Website",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="flex min-h-screen w-full min-w-[230px] flex-col items-center">
				<main className="flex w-full flex-1 flex-col items-center">
					<Header />
					{children}
					<Footer />
				</main>
			</body>
		</html>
	);
}
