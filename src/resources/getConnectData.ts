import fs from "fs";
import path from "path";

export const getConnectData = async (): Promise<string> => {
	const pagePath = path.join(process.cwd(), "public", "connect.html");
	const htmlString = fs.readFileSync(pagePath, "utf8");

	return htmlString;
};
