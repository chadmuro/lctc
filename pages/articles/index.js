import PageHero from '../../components/Pages/PageHero/PageHero';
import ArticlesMain from '../../components/Pages/ArticlesMain/ArticlesMain';

const Articles = () => {
	return (
		<div className="articles">
			<PageHero title="Articles" />
			<ArticlesMain />
		</div>
	);
};

export default Articles;
