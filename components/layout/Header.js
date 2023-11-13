import Link from "next/link";
import DefaultMenu from "./DefaultMenu";
import CompactMenu from "./CompactMenu";

const Header = () => {
	return (
		<header className="sticky z-50 top-0 flex w-full items-center justify-center bg-slate-900 px-4 py-2">
			<div className="flex z-50 max-w-4xl w-full items-center justify-between py-2">
				<Link className="flex items-center justify-center" href="/">
					<div className="flex w-12 justify-center outline-none shrink-0 hover:cursor-pointer">
						<img
							className="rounded"
							src="/images/ernestor-eth.png"
							alt="logo"
						/>
					</div>
				</Link>
				<div className="hidden md:flex">
					<DefaultMenu />
				</div>
				<div className="md:hidden">
					<CompactMenu />
				</div>
			</div>
		</header>
	);
};

export default Header;
