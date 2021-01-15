import { motion } from 'framer-motion';
import PageHero from '../../components/Pages/PageHero/PageHero';
import styles from './styles.module.scss';
import sanityClient from '../../client';

export async function getStaticProps() {
	const resources = [
		{
			title: 'Learning Platforms',
			links: [],
		},
		{
			title: 'Coding Challenges',
			links: [],
		},
		{
			title: 'Frontend Resources',
			links: [],
		},
		{
			title: 'Backend Resources',
			links: [],
		},
	];

	const data = await sanityClient.fetch(`*[_type == "link"]{
        name,
        link,
        _id,
        image,
        'category': category->title
    }`);

	data.forEach(link => {
		switch (link.category) {
			case 'Platform':
				resources[0].links.push(link);
				break;
			case 'Challenge':
				resources[1].links.push(link);
                break;
            case 'Frontend':
                resources[2].links.push(link);
                break;
            case 'Backend':
                resources[3].links.push(link);
                break;
			default:
				null;
		}
	});

	return {
		props: {
			resources,
		},
	};
}

const Resources = ({ resources }) => {
	const openNewTab = url => {
		const newWindow = window.open(url, '_blank', 'noopener, noreferrer');
		if (newWindow) newWindow.opener = null;
	};

	const linkVariants = {
		hidden: { x: '-100vw' },
		visible: {
			x: 0,
			transition: {
				duration: 0.8,
				type: 'spring',
			},
		},
	};

	return (
		<div className="resources">
			<PageHero title="Resources" />
			<main className={styles.main}>
				{resources &&
					resources.map(resource => (
						<div className={styles.content} key={resource.title}>
							<h3 className={styles.content__title}>{resource.title}</h3>
							<ul>
								{resource.links &&
									resource.links.map(link => (
										<li key={link._id}>
											<motion.p
												className={styles.content__name}
												initial="hidden"
												animate="visible"
												variants={linkVariants}
											>
												<a
													className={styles.content__link}
													onClick={() => openNewTab(link.link)}
												>
													{link.name}
												</a>
											</motion.p>
										</li>
									))}
							</ul>
						</div>
					))}
			</main>
		</div>
	);
};

export default Resources;
