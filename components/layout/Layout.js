import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
	return (
		<div className="flex min-h-screen flex-col">
			<Header />
			<main className="flex flex-1 flex-col items-center justify-center">
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
