import { useContext } from 'react';
import styles from './ArticlesMain.module.scss';
import { MediumContext } from '../../../contexts/MediumContext';
import Card from '../Card/Card';

const ArticlesMain = () => {
	const { posts, loading } = useContext(MediumContext);

	return (
		<div className={styles.main}>
			{posts &&
				posts.map(post => {
					return <Card post={post} key={post.title} />;
				})}
		</div>
	);
};

export default ArticlesMain;