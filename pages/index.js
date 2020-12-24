import Hero from '../components/Home/Hero/Hero';
import Features from '../components/Home/Features/Features';
import FeaturedProject from '../components/Home/FeaturedProject/FeaturedProject';
import LatestArticles from '../components/Home/LatestArticles/LatestArticles';

export async function getStaticProps(context) {
	const res = await fetch('https://lctc-strapi.herokuapp.com/projects/');
	const projects = await res.json();

	return {
		props: {
			projects
		}
	}
}

const Home = ({ projects }) => {
	const project = projects[0];

	return (
		<div className="home">
			<Hero />
			<Features />
			<FeaturedProject project={project}/>
			<LatestArticles />
		</div>
	);
};

export default Home;
