import PageHero from '../../components/Pages/PageHero/PageHero';
import styles from './styles.module.scss';

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

const Resources = () => {
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
								<li>
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
				</div>
			</main>
		</div>
	);
};

export default Resources;
