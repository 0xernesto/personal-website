import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
	return (
		<div className="flex min-h-screen flex-col items-center w-full min-w-[230px]">
			<main className="flex w-full flex-1 flex-col items-center">
				<Header />
				{children}
				<Footer />
			</main>
		</div>
	);
};

export default Layout;
