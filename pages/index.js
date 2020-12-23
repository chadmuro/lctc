import Hero from '../components/Home/Hero/Hero';
import Features from '../components/Home/Features/Features';
import FeaturedProject from '../components/Home/FeaturedProject/FeaturedProject';
import LatestArticles from '../components/Home/LatestArticles/LatestArticles';

const Home = () => {
	return (
		<div className="home">
			<Hero />
			<Features />
			<FeaturedProject />
			<LatestArticles />
		</div>
	);
};

export default Home;
