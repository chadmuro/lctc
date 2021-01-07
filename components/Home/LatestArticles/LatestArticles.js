import Link from 'next/link';
import styles from './LatestArticles.module.scss';

const LatestArticles = ({ posts }) => {
	const homePosts = posts.slice(0, 4);

	const openNewTab = url => {
		const newWindow = window.open(url, '_blank', 'noopener, noreferrer');
		if (newWindow) newWindow.opener = null;
	};

	return (
		<div className={styles.latestarticles}>
			<div className={styles.latestarticles__content}>
				<div className={styles.latestarticles__content_links}>
					{homePosts &&
						homePosts.map(post => {
							return (
								<h3
									key={post.title}
									onClick={() => openNewTab(post.link)}
									className={styles.latestarticles__content_link}
								>
									{post.title}
								</h3>
							);
						})}
				</div>
				<div className={styles.latestarticles__content_title}>
					<h3 className="title">Latest Articles</h3>
					<Link href="/articles">
						<a className="button_link">See More Articles</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default LatestArticles;
