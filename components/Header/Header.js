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
    
    const closeMenu = () => {
        setOpenMenu(false);
    }

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

			<ul
				className={
					openMenu ? `${styles.header__links} ${styles.active}` : styles.header__links
				}
			>
				<li className={styles.header__item}>
					<Link href="/">
						<a className={styles.header__link} onClick={closeMenu}>
							Home
						</a>
					</Link>
				</li>
				<li className={styles.header__item}>
					<Link href="/projects">
						<a className={styles.header__link} onClick={closeMenu}>
							Projects
						</a>
					</Link>
				</li>
				<li className={styles.header__item}>
					<Link href="/articles">
						<a className={styles.header__link} onClick={closeMenu}>
							Articles
						</a>
					</Link>
				</li>
				<li className={styles.header__item}>
					<Link href="/mentor">
						<a className={styles.header__link} onClick={closeMenu}>
							Mentor
						</a>
					</Link>
				</li>
				<li className={styles.header__item}>
					<Link href="/resources">
						<a className={styles.header__link} onClick={closeMenu}>
							Resources
						</a>
					</Link>
				</li>
			</ul>

			<div className={styles.icon} onClick={toggleMenu}>
				{openMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
			</div>
		</div>
	);
};

export default Header;
