import { useEffect } from 'react';
import { IconContext } from 'react-icons';
import { FcCommandLine, FcReading, FcConferenceCall } from 'react-icons/fc';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Features.module.scss';

const cardVariants = {
	hidden: { scale: 0 },
	visible: {
		scale: 1,
		transition: { duration: 0.3 },
	},
};

const Card = ({ title, description, icon }) => {
    const controls = useAnimation();
		const [ref, inView] = useInView();

		useEffect(() => {
			if (inView) {
				controls.start('visible');
			}
			if (!inView) {
				controls.start('hidden');
			}
        }, [controls, inView]);

        
    return (
			<motion.div
				ref={ref}
				initial="hidden"
				animate={controls}
				variants={cardVariants}
				className={styles.features__card}
			>
				{icon}
				<h3>{title}</h3>
				<p>
					{description}
				</p>
			</motion.div>
		);
}

const Features = () => {
	
	return (
		<IconContext.Provider value={{ className: styles.icon }}>
			<div className={styles.features}>
				<Card
					title="Projects"
					description="Build responsive web pages and web applications with our project
                        tutorials"
					icon={<FcCommandLine />}
				/>
				<Card
					title="Articles"
					description="Keep up with web development trends and learn new topics through our
                        weekly articles"
					icon={<FcReading />}
				/>
				<Card
					title="Community"
					description="Join our community of learners; Learn and teach each other,
                        collaborate on projects, share ideas"
					icon={<FcConferenceCall />}
				/>
			</div>
		</IconContext.Provider>
	);
};

export default Features;
