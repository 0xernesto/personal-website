import Link from "next/link";
import DefaultMenu from "./DefaultMenu";
import CompactMenu from "./CompactMenu";

const Header = () => {
	return (
		<header className="sticky top-0 z-50 mb-5 bg-slate-900">
			<div className="flex items-center justify-between p-2">
				<div className="flex items-center justify-center w-12">
					<Link href="/">
						<a className="relative flex justify-center h-10">
							<img
								className="rounded opacity-90 hover:opacity-100"
								src="/images/ernestor-eth.png"
								alt="logo"
							/>
						</a>
					</Link>
				</div>
				<div className="hidden sm:flex">
					<DefaultMenu />
				</div>
				<div className="sm:hidden">
					<CompactMenu />
				</div>
			</div>
		</header>
	);
};

export default Header;
