import { IconContext } from 'react-icons';
import { FcCommandLine, FcReading, FcConferenceCall } from 'react-icons/fc';
import styles from './Features.module.scss';

const Features = () => {
	return (
		<IconContext.Provider value={{ className: styles.icon }}>
			<div className={styles.features}>
				<div className={styles.features__card}>
					<FcCommandLine />
					<h3>Projects</h3>
					<p>
						Build responsive web pages and web applications with our project
						tutorials
					</p>
				</div>
				<div className={styles.features__card}>
					<FcReading />
					<h3>Articles</h3>
					<p>
						Keep up with web development trends and learn new topics through our
						weekly articles
					</p>
				</div>
				<div className={styles.features__card}>
					<FcConferenceCall />
					<h3>Community</h3>
					<p>
						Join our community of learners; Learn and teach each other,
						collaborate on projects, share ideas
					</p>
				</div>
			</div>
		</IconContext.Provider>
	);
};

export default Features;
