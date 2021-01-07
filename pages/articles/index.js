import styles from './styles.module.scss';
import PageHero from '../../components/Pages/PageHero/PageHero';
import Card from '../../components/Pages/Card/Card';

export async function getStaticProps() {
	const res = await fetch(
		'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40chadmuro'
	);
	const posts = await res.json();

	return {
		props: {
			posts: posts.items,
		},
	};
}

const Articles = ({ posts }) => {
	console.log(posts);

	const openNewTab = url => {
		const newWindow = window.open(url, '_blank', 'noopener, noreferrer');
		if (newWindow) newWindow.opener = null;
	};

	return (
		<div className="articles">
			<PageHero title="Articles" />

			<div className={styles.main}>
				{posts &&
					posts.map(post => {
						return <Card post={post} key={post.title} />;
					})}
			</div>

			<a
				className={styles.button}
				onClick={() => openNewTab('https://chadmuro.medium.com/')}
			>
				See All Articles
			</a>
		</div>
	);
};

export default Articles;
