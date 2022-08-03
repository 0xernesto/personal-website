import { Link } from "../../routes";
import Image from "next/image";
import logo from "../../assets/ernestor_eth.png";
import DefaultMenu from "./DefaultMenu";
import CompactMenu from "./CompactMenu";

const Header = () => {
	return (
		<header className="sticky top-0 mb-5 bg-slate-900">
			<div className="flex items-center justify-between p-2">
				<div className="flex items-center w-10">
					<Link route={"/"}>
						<a className="flex justify-center">
							<Image
								className="rounded opacity-90 hover:opacity-100"
								src={logo}
								alt="logo"
								priority
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
