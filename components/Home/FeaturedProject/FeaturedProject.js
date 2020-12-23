import Link from 'next/link';
import Card from '../../Pages/Card/Card';
import styles from './FeaturedProject.module.scss';

const FeaturedProject = ({ project }) => {
	return (
		<div className={styles.featuredproject}>
			<div className={styles.featuredproject__content}>
				<div className={styles.featuredproject__content_title}>
					<h3 className="title">Featured Project</h3>
					<h4>{project.title}</h4>
					<p>
						{project.description}
					</p>
					<p>Level: {project.level}</p>
					<Link href="/projects">
						<a className="button_link">View All Projects</a>
						
					</Link>
				</div>
				<div className={styles.featuredproject__card}>
					<Card
						post={{
							link: '/',
							thumbnail: project.image.name,
							title: project.description,
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default FeaturedProject;
