import styles from './ProjectsMain.module.scss';
import CardLarge from '../CardLarge/CardLarge';

const ProjectsMain = ({projects}) => {
	return (
		<div className={styles.main}>
			{projects && projects.map(project => {
				return <CardLarge project={project} />;
			})}
		</div>
	);
};

export default ProjectsMain;
