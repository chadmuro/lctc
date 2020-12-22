import Head from 'next/head';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Layout.module.scss';

const Layout = props => {
	return (
		<div className={styles.layout}>
			<Head>
				<title>Learn Code, Teach Code</title>
			</Head>

			<Header />
			<div className={styles.content}>{props.children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
