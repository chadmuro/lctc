import PageHero from '../../components/Pages/PageHero/PageHero';
import ProjectsMain from '../../components/Pages/ProjectsMain/ProjectsMain';

export async function getStaticProps(context) {
	const res = await fetch('https://lctc-strapi.herokuapp.com/projects/');
	const projects = await res.json();

	return {
		props: {
			projects,
		},
	};
}

const Projects = ({ projects }) => {
	return (
		<div className="projects">
			<PageHero title="Projects" />
			<ProjectsMain projects={projects}/>
		</div>
	);
};

export default Projects;
