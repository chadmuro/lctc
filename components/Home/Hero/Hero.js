import styles from './Hero.module.scss';

// import '../../../sass/components.scss';
// import hero from '../../../public/img/lctc-hero.mp4';

const Hero = () => {
	return (
		<div className={styles.hero}>
			<div className={styles.hero__video}>
				<video className={styles.hero__video_content} autoPlay muted loop>
					<source src='./img/lctc-hero.mp4' type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>

			<div className={styles.hero__title}>
				<h1>Learn Code, Teach Code</h1>
				<p>Anyone can learn code by teaching code</p>
				<button className="button">Projects</button>
			</div>
		</div>
	);
};

export default Hero;
