import styles from './Card.module.scss';

const Card = ({ post }) => {
	const openNewTab = url => {
		const newWindow = window.open(url, '_blank', 'noopener, noreferrer');
		if (newWindow) newWindow.opener = null;
	};

	return (
		<div className={styles.card} onClick={() => openNewTab(post.link)}>
			<div className={styles.card__image}>
				<img src={post.thumbnail} alt="card" className={styles.card__image_source} />
			</div>
			<div className={styles.card__content}>
				<h3>{post.title}</h3>
			</div>
		</div>
	);
};

export default Card;
