import PageHero from '../../components/Pages/PageHero/PageHero';

import React from 'react';

const Projects = () => {
	return (
		<div className="projects">
			<PageHero title="Projects" />
			<p
				style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}
			>
				New Projects coming soon...
			</p>
		</div>
	);
};

export default Projects;


