import PageHero from '../../components/Pages/PageHero/PageHero';
import styles from './styles.module.scss';
import sanityClient from '../../client';

const platforms = [
	{
		name: 'Youtube',
		link: 'https://www.youtube.com/',
	},
	{
		name: 'Codecademy',
		link: 'https://www.codecademy.com/',
	},
	{
		name: 'Udemy',
		link: 'https://www.udemy.com/',
	},
	{
		name: 'freeCodeCamp',
		link: 'https://www.freecodecamp.org/',
	},
];

export async function getStaticProps() {
	const platforms = await sanityClient.fetch(`*[_type == "platform"]{
        name,
        link,
        _id
    }`);
	const challenges = await sanityClient.fetch(`*[_type == "challenge"]{
        name,
        link,
        _id
    }`);

	return {
		props: {
            platforms,
            challenges
		},
	};
}

const Resources = ({ platforms, challenges }) => {
    const openNewTab = url => {
			const newWindow = window.open(url, '_blank', 'noopener, noreferrer');
			if (newWindow) newWindow.opener = null;
        };

	return (
		<div className="resources">
			<PageHero title="Resources" />
			<main>
				<div className={styles.content}>
					<h3 className={styles.content__title}>Learning Platforms</h3>
					<ul>
						{platforms &&
							platforms.map(platform => (
								<li key={platform._id}>
									<p className={styles.content__name}>
										{platform.name} &nbsp;
										<a
											className={styles.content__link}
                                            onClick={() => openNewTab(platform.link)}
										>
											{platform.link}
										</a>
									</p>
								</li>
							))}
					</ul>
					<h3 className={styles.content__title}>Coding Challenges</h3>
					<ul>
						{challenges &&
							challenges.map(challenge => (
								<li key={challenge._id}>
									<p className={styles.content__name}>
										{challenge.name} &nbsp;
										<a
											className={styles.content__link}
                                            onClick={() => openNewTab(challenge.link)}
										>
											{challenge.link}
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
