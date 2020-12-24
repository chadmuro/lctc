import styles from './styles.module.scss';
import PageHero from '../../components/Pages/PageHero/PageHero';
import ArticlesMain from '../../components/Pages/ArticlesMain/ArticlesMain';

const Articles = () => {
	const openNewTab = url => {
		const newWindow = window.open(url, '_blank', 'noopener, noreferrer');
		if (newWindow) newWindow.opener = null;
	};

	return (
		<div className="articles">
			<PageHero title="Articles" />
			<ArticlesMain />
			<a
				className={styles.button}
				onClick={() => openNewTab('https://chadmuro.medium.com/')}
			>
				See More Articles
			</a>
		</div>
	);
};

export default Articles;
