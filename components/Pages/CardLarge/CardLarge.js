import styles from './CardLarge.module.scss';

const CardLarge = ({ project }) => {
	// const openNewTab = url => {
	// 	const newWindow = window.open(url, '_blank', 'noopener, noreferrer');
	// 	if (newWindow) newWindow.opener = null;
	// };

	return (
		<div className={styles.cardlarge} onClick={() => console.log('clicked')}>
			<div className={styles.cardlarge__image}>
				<img
					src={project.image.name}
					alt="card"
					className={styles.cardlarge__image_source}
				/>
			</div>
			<div className={styles.cardlarge__content}>
				<h2>{project.title}</h2>
				<h3>{project.description}</h3>
				<p>{project.content}</p>
                <h5>Level: {project.level}</h5>
			</div>
		</div>
	);
};

export default CardLarge;
