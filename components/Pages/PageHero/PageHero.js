import styles from './PageHero.module.scss';

const PageHero = ({ title }) => {
	return (
		<div className={styles.pagehero}>
			<h1 className={styles.pagehero__title}>{title}</h1>
		</div>
	);
};

export default PageHero;
