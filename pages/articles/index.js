import Layout from '../../components/Layout/Layout';
import PageHero from '../../components/Pages/PageHero/PageHero';
import ArticlesMain from '../../components/Pages/ArticlesMain/ArticlesMain';

const Articles = () => {
	return (
		<div className="articles">
			<Layout>
				<PageHero title="Articles" />
				<ArticlesMain />
			</Layout>
		</div>
	);
};

export default Articles;
