import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import styles from './Card.module.scss';

const cardVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 0.5,
		},
    },
};

const Card = ({ post }) => {
	const openNewTab = url => {
		const newWindow = window.open(url, '_blank', 'noopener, noreferrer');
		if (newWindow) newWindow.opener = null;
	};
	const controls = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);

	return (
		<motion.div
			className={styles.card}
			onClick={() => openNewTab(post.link)}
			initial="hidden"
			animate={controls}
			variants={cardVariants}
            ref={ref}
		>
			<div className={styles.card__image}>
				<img
					src={post.thumbnail}
					alt="card"
					className={styles.card__image_source}
				/>
			</div>
			<div className={styles.card__content}>
				<h3>{post.title}</h3>
			</div>
		</motion.div>
	);
};

export default Card;
