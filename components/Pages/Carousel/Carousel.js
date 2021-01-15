// import { motion } from 'framer-motion';
import styles from './Carousel.module.scss';

const Carousel = ({ resource }) => {
	// const numLinks = resource.links.length;

	// const carouselVariants = {
	// 	hidden: {},
	// 	visible: {
	// 		transition: {
	// 			// staggerChildren: numLinks,
	// 		},
	// 	},
	// };

	// const imageVariants = {
	// 	hidden: { x: '100vw' },
	// 	visible: {
	// 		x: [ '50vw', '0vw', '-50vw', '-100vw'],
	// 		transition: {
	//             duration: 10,
	//             ease: 'linear',
	// 			repeat: Infinity,
	// 		},
	// 	},
	// };

	return (
		<div className={styles.carousel}>
			{resource &&
				resource.links.map((link) => (
					<div key={link._id} className={styles.carousel__image}>
						<img
							className={styles.carousel__link}
							src={link.image ? link.image.asset.url : null}
							alt={link.title}
						/>
					</div>
				))}
		</div>
	);
};

export default Carousel;
