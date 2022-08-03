import MenuLink from "./MenuLink";
import { Menu, Transition } from "@headlessui/react";
import { FiMenu } from "react-icons/fi";

const CompactMenu = () => {
	return (
		<Menu as="div" className="relative">
			{({ open }) => (
				<>
					<Menu.Button className="flex items-center justify-center w-8 h-8 hover:text-white focus:outline-none">
						<FiMenu size="25px" />
					</Menu.Button>
					<Transition
						show={open}
						enter="transform transition duration-150 ease-in"
						enterFrom="opacity-0 scale-90"
						enterTo="opacity-100 scale-100"
						leave="trasnform transition duration-100 ease-out"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale 90"
					>
						<Menu.Items
							className="absolute right-0 flex flex-col p-2 origin-top-right rounded shadow-xl top-4 bg-slate-900 focus:outline-none"
							static={true}
						>
							<Menu.Item>
								{({ active }) => (
									<MenuLink
										className={`px-2 py-1 border-y-2 ${
											active
												? "text-white border-t-transparent border-b-white`"
												: "text-[#d3d3d3] border-y-transparent"
										}`}
										route={"/about"}
									>
										About
									</MenuLink>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<MenuLink
										className={`px-2 py-1 border-y-2 ${
											active
												? "text-white border-t-transparent border-b-white`"
												: "text-[#d3d3d3] border-y-transparent"
										}`}
										route={"/projects/all"}
									>
										Projects
									</MenuLink>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<MenuLink
										className={`px-2 py-1 border-y-2 ${
											active
												? "text-white border-t-transparent border-b-white`"
												: "text-[#d3d3d3] border-y-transparent"
										}`}
										route={"/blog/posts"}
									>
										Blog
									</MenuLink>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<MenuLink
										className={`px-2 py-1 border-y-2 ${
											active
												? "text-white border-t-transparent border-b-white`"
												: "text-[#d3d3d3] border-y-transparent"
										}`}
										route={"/contact"}
									>
										Contact
									</MenuLink>
								)}
							</Menu.Item>
						</Menu.Items>
					</Transition>
				</>
			)}
		</Menu>
	);
};

export default CompactMenu;
