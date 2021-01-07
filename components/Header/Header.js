import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Header.module.scss';

const Header = () => {
	const router = useRouter();

	return (
		<div className={router.pathname === "/" ? styles.transparent : styles.header}>
			<Link href="/">
				<h3 className={styles.header__title}>Learn Code, Teach Code</h3>
			</Link>

			<ul className={styles.header__links}>
				<li>
					<Link href="/">
						<a className={styles.header__links_link}>Home</a>
					</Link>
				</li>
				{/* <li>
					<Link href="/projects">
						<a className={styles.header__links_link}>Projects</a>
					</Link>
				</li> */}
				<li>
					<Link href="/articles">
						<a className={styles.header__links_link}>Articles</a>
					</Link>
				</li>
				<li>
					<Link href="/mentor">
						<a className={styles.header__links_link}>Mentor</a>
					</Link>
				</li>
				<li>
					<Link href="/resources">
						<a className={styles.header__links_link}>Resources</a>
					</Link>
				</li>
				{/* <li>
					<Link href="/community">
						<a className={styles.header__links_link}>Community</a>
					</Link>
				</li> */}
			</ul>
		</div>
	);
};

export default Header;
