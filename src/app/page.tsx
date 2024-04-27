import styles from "./page.module.css";
import "../styles/styles.scss";
import "../styles/pages/home.scss";
import Hero from "@/components/pages/homepage/Hero/Hero";
import Main from "@/components/pages/homepage/Main/Main";

export default function Home() {
	return (
		<>
			<Hero />
			<Main />
		</>
	);
}
