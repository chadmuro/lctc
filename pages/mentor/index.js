import { GrTwitter } from 'react-icons/gr';
import { FcAssistant } from 'react-icons/fc';
import PageHero from '../../components/Pages/PageHero/PageHero';
import styles from './styles.module.scss';

const Mentor = () => {
	return (
		<div className={styles.mentor}>
			<PageHero title="Mentor" />
			<main className={styles.main}>
				<div className={styles.main__top}>
					<h4>Want to learn programming, but don't know where to start?</h4>
					<br />
					<h4>
						There are thousands of resources out there. It can be overwhelming.
					</h4>
					<br />
					<h4>
						Message me on Twitter{' '}
						<span className={styles.icon}>
							<GrTwitter />
						</span>{' '}
						Let's have a chat!
					</h4>
					<img
						src="/img/computers.svg"
						alt="computers"
						height="400"
						width="400"
					/>
				</div>

				<div className={styles.main__story}>
					<h3>My Story</h3>
					<p>
						I am a self-taught developer who starting to learn to code in 2020.
						I know the struggle of learning to code and want to help others who
						are starting out.
					</p>
					<p>
						I want to help others who decided they want to learn to code. I may
						not have all the answers, but I would like to give you some advice,
						resources, and motivation to help you get started.
					</p>
					<p>
						Learning to code is a tough journey, but you don't have to do it on
						your own. Message me on Twitter and I would be happy to connect with
						you!
					</p>
				</div>
			</main>
		</div>
	);
};

export default Mentor;
