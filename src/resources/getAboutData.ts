import fs from "fs";
import path from "path";

export const getAboutData = async (): Promise<string> => {
	const filePath = path.join(process.cwd(), "public", "content/about.md");
	const content = fs.readFileSync(filePath, "utf8");

	return content;
};
