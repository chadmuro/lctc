import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const MediumContext = createContext();

const MediumContextProvider = props => {
	const [posts, setPosts] = useState([]);
	const [homePosts, setHomePosts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get(
				'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40chadmuro'
			)
			.then(response => {
				setPosts(response.data.items);
				setHomePosts([
					response.data.items[0],
					response.data.items[1],
					response.data.items[2],
					response.data.items[3],
				]);
				setLoading(false);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	return (
		<MediumContext.Provider value={{ posts, homePosts, loading }}>
			{props.children}
		</MediumContext.Provider>
	);
};

export default MediumContextProvider;
