import Link from 'next/link';
import Card from '../../Pages/Card/Card';
import styles from './FeaturedProject.module.scss';

const FeaturedProject = () => {
	return (
		<div className={styles.featuredproject}>
			<div className={styles.featuredproject__content}>
				<div className={styles.featuredproject__content_title}>
					<h3 className="title">Featured Project</h3>
					<h4>Todo List with HTML, CSS, and Vanilla JavaScript</h4>
					<p>
						Learn basic HTML, CSS, JavaScript, and how to work with local
						storage.
					</p>
					<p>Level: Beginner</p>
					<Link href="/projects">
						<a className="button_link">View All Projects</a>
						
					</Link>
				</div>
				<div className={styles.featuredproject__card}>
					<Card
						post={{
							link: '/',
							thumbnail: '/',
							title: 'Build a Todo List with HTML, CSS, and Vanilla JavaScript',
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default FeaturedProject;
