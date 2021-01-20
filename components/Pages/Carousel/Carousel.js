import styles from './Carousel.module.scss';

const Carousel = ({ resource }) => {
	const repeatAmount = resource.links.length;
	const repeatImages = [
		resource.links[0] || {},
		resource.links[1] || {},
		resource.links[2] || {},
		resource.links[3] || {},
	];

	const openNewTab = url => {
		const newWindow = window.open(url, '_blank', 'noopener, noreferrer');
		if (newWindow) newWindow.opener = null;
	};

	return (
		<div className={styles.carousel}>
			<ul className={styles.carousel__content}>
				{resource &&
					resource.links.map(link => (
						<li key={link._id} className={styles.carousel__image}>
							<img
								className={styles.carousel__link}
								src={link.image ? link.image.asset.url : null}
								alt={link.title}
								onClick={() => openNewTab(link.link)}
							/>
						</li>
					))}
				{repeatImages &&
					repeatImages.map(link => (
						<li key={link._id} className={styles.carousel__image}>
							<img
								className={styles.carousel__link}
								src={link.image ? link.image.asset.url : null}
								alt={link.title}
								onClick={() => openNewTab(link.link)}
							/>
						</li>
					))}
			</ul>
		</div>
	);
};

export default Carousel;
