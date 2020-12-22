import Layout from '../components/Layout/Layout';
import Hero from '../components/Home/Hero/Hero';
import Features from '../components/Home/Features/Features';
import FeaturedProject from '../components/Home/FeaturedProject/FeaturedProject';
import LatestArticles from '../components/Home/LatestArticles/LatestArticles';

const Home = () => {
	return (
		<div className="home">
			<Layout>
				<Hero />
				<Features />
				<FeaturedProject />
				<LatestArticles />
			</Layout>
		</div>
	);
};

export default Home;