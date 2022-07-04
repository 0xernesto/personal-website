import styles from "../styles/Home.module.css";
import { Link } from "../routes";

const Home = () => {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles.title}>Home Page</h1>
				<Link route={"/about"}>
					<a>About</a>
				</Link>
				<Link route={"/projects/all"}>
					<a>Projects</a>
				</Link>
				<Link route={"/blog/posts"}>
					<a>Blog</a>
				</Link>
				<Link route={"/contact"}>
					<a>Contact</a>
				</Link>
			</main>
		</div>
	);
};

export default Home;
