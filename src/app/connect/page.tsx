import Link from "next/link";
import React from "react";

import ConnectLinks from "../../components/ConnectLinks";

function Connect() {
	return (
		<div className="flex w-full flex-1 flex-col items-center justify-center px-4 py-10">
			<div className="flex min-h-fit w-full max-w-sm flex-col items-center">
				<Link
					className="flex shrink-0 items-center justify-center outline-none"
					href="/"
				>
					<div className="relative flex w-20 justify-center">
						<img
							className="rounded"
							src="/images/ernestor-eth.png"
							alt="ernestor-eth icon"
						/>
					</div>
				</Link>
				<h1 className="mt-4 text-center text-3xl">Ernesto Ramirez</h1>
				<ConnectLinks />
			</div>
		</div>
	);
}

export default Connect;
