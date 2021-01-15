import PageHero from '../../components/Pages/PageHero/PageHero';
import styles from './styles.module.scss';
import sanityClient from '../../client';

export async function getStaticProps() {
    const platforms = [];
    const challenges = [];
	const links = await sanityClient.fetch(`*[_type == "link"]{
        name,
        link,
        _id,
        image,
        'category': category->title
    }`);

    links.forEach(link => {
        if (link.category === 'Platform') {
            platforms.push(link);
        }
        if (link.category === 'Challenge') {
            challenges.push(link);
        }
    })
	
	return {
		props: {
			platforms,
			challenges,
		},
	};
}

const Resources = ({ platforms, challenges }) => {
	const openNewTab = url => {
		const newWindow = window.open(url, '_blank', 'noopener, noreferrer');
		if (newWindow) newWindow.opener = null;
    };
    
    console.log(platforms);

	return (
		<div className="resources">
			<PageHero title="Resources" />
			<main className={styles.main}>
				<div className={styles.content}>
					<h3 className={styles.content__title}>Learning Platforms</h3>
					<ul>
						{platforms &&
							platforms.map(platform => (
								<li key={platform._id}>
									<p className={styles.content__name}>
										<a
											className={styles.content__link}
											onClick={() => openNewTab(platform.link)}
										>
											{platform.name}
										</a>
									</p>
								</li>
							))}
					</ul>
				</div>
				<div className={styles.content}>
					<h3 className={styles.content__title}>Coding Challenges</h3>
					<ul>
						{challenges &&
							challenges.map(challenge => (
								<li key={challenge._id}>
									<p className={styles.content__name}>
										<a
											className={styles.content__link}
											onClick={() => openNewTab(challenge.link)}
										>
											{challenge.name}
										</a>
									</p>
								</li>
							))}
					</ul>
				</div>
			</main>
		</div>
	);
};

export default Resources;
