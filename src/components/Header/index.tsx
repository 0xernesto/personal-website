"use client";

import Link from "next/link";
import React from "react";

import CompactMenu from "../CompactMenu";
import DefaultMenu from "../DefaultMenu";

function Header() {
	return (
		<header className="sticky top-0 z-10 flex w-full items-center justify-center bg-dark-600/20 px-4 py-2 backdrop-blur-sm">
			<div className="flex w-full max-w-4xl items-center justify-between py-2">
				<Link
					className="flex shrink-0 items-center justify-center"
					href="/"
				>
					<div className="relative flex w-12 justify-center outline-none">
						<img
							className="rounded"
							src="/images/ernestor-eth.png"
							alt="ernestor-eth icon"
						/>
					</div>
				</Link>
				<div className="hidden px-4 md:flex">
					<DefaultMenu />
				</div>
				<div className="md:hidden">
					<CompactMenu />
				</div>
			</div>
		</header>
	);
}

export default Header;
