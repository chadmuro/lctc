import Hero from '../components/Home/Hero/Hero';
import Features from '../components/Home/Features/Features';
import FeaturedProject from '../components/Home/FeaturedProject/FeaturedProject';
import LatestArticles from '../components/Home/LatestArticles/LatestArticles';
import Mentor from '../components/Home/Mentor/Mentor';

export async function getStaticProps() {
    const res = await fetch(
			'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40chadmuro'
        );
    const posts = await res.json();

    return {
        props: {
            posts: posts.items
        }
    }
}

const Home = ({ posts }) => {

	return (
		<div className="home">
			<Hero />
			<Features />
            <Mentor />
			<LatestArticles posts={posts}/>
		</div>
	);
};

export default Home;
