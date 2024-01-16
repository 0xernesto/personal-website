import "../styles/globals.css";

import type { Metadata, Viewport } from "next";
import React from "react";

export const viewport: Viewport = {
	themeColor: "#000000", // dark-600
};

export const metadata: Metadata = {
	metadataBase: new URL("https://ernestor.xyz"),
	title: "Ernesto Ramirez",
	description: "Personal Website",
	keywords: [
		"Ernesto Ramirez",
		"Aerospace Engineer",
		"Software Engineer",
		"Engineering",
		"Purdue University",
		"Georgia Institute of Technology",
		"Georgia Tech",
		"Open-Source",
		"Startups",
		"Code",
		"Math",
		"Chain Rule",
		"xSafe",
		"Pelleum",
		"Ax Protocol",
		"USX",
		"DeFi",
		"Crypto",
		"Smart Contracts",
		"Ethereum",
		"EVM",
	],
	icons: {
		icon: [
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				url: "/favicon-32x32.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				url: "/favicon-16x16.png",
			},
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				url: "/apple-touch-icon.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "192x192",
				url: "/android-chrome-192x192.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "512x512",
				url: "/android-chrome-512x512.png",
			},
			{
				rel: "mask-icon",
				url: "/safari-pinned-tab.svg",
				color: "#404040", // dark-100
			},
		],
	},
	openGraph: {
		title: "Ernesto Ramirez",
		description: "Personal Website",
		url: "https://ernestor.xyz",
		type: "website",
		images: [
			{
				url: "/card-image.png",
			},
		],
	},
	twitter: {
		title: "Ernesto Ramirez",
		description: "Personal Website",
		card: "summary_large_image",
		images: [
			{
				url: "/card-image.png",
			},
		],
		site: "@ernestor_eth",
	},
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
					{children}
				</main>
			</body>
		</html>
	);
}
