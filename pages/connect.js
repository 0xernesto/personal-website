import { useEffect } from "react";
import fs from "fs";
import path from "path";

const Connect = ({ htmlString }) => {
	useEffect(() => {
		document.body.innerHTML = htmlString;
	}, [htmlString]);

	return null;
};

export async function getServerSideProps() {
	const pagePath = path.join(process.cwd(), "public", "connect.html");
	const htmlString = fs.readFileSync(pagePath, "utf8");

	return { props: { htmlString } };
}

export default Connect;
