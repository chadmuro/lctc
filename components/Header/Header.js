import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Header.module.scss';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const router = useRouter();

	const toggleMenu = () => {
		setOpenMenu(!openMenu);
	};

	return (
		<div
			className={router.pathname === '/' ? styles.transparent : styles.header}
		>
			<Link href="/">
				<h3 className={styles.header__title}>
					Learn Code,
					<br />
					Teach Code
				</h3>
			</Link>

			<ul className={styles.header__links}>
				<li>
					<Link href="/">
						<a className={styles.header__link}>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/projects">
						<a className={styles.header__link}>Projects</a>
					</Link>
				</li>
				<li>
					<Link href="/articles">
						<a className={styles.header__link}>Articles</a>
					</Link>
				</li>
				<li>
					<Link href="/mentor">
						<a className={styles.header__link}>Mentor</a>
					</Link>
				</li>
				<li>
					<Link href="/resources">
						<a className={styles.header__link}>Resources</a>
					</Link>
				</li>
				<li>
					<Link href="/community">
						<a className={styles.header__link}>Community</a>
					</Link>
				</li>
			</ul>

			<ul
				className={openMenu ? styles.header__openlinks : styles.header__closelinks}
			>
				<li>
					<Link href="/">
						<a className={styles.header__link} onClick={toggleMenu}>
							Home
						</a>
					</Link>
				</li>
				<li>
					<Link href="/projects">
						<a className={styles.header__link} onClick={toggleMenu}>
							Projects
						</a>
					</Link>
				</li>
				<li>
					<Link href="/articles">
						<a className={styles.header__link} onClick={toggleMenu}>
							Articles
						</a>
					</Link>
				</li>
				<li>
					<Link href="/mentor">
						<a className={styles.header__link} onClick={toggleMenu}>
							Mentor
						</a>
					</Link>
				</li>
				<li>
					<Link href="/resources">
						<a className={styles.header__link} onClick={toggleMenu}>
							Resources
						</a>
					</Link>
				</li>
				<li>
					<Link href="/community">
						<a className={styles.header__link} onClick={toggleMenu}>
							Community
						</a>
					</Link>
				</li>
			</ul>

			{openMenu ? (
				<AiOutlineClose className={styles.close} onClick={toggleMenu} />
			) : (
				<AiOutlineMenu className={styles.hamburger} onClick={toggleMenu} />
			)}
		</div>
	);
};

export default Header;
