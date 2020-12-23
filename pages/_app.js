import '../styles/globals.scss';
import Layout from '../components/Layout/Layout';
import MediumContextProvider from '../contexts/MediumContext';

function MyApp({ Component, pageProps }) {
	return (
		<MediumContextProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</MediumContextProvider>
	);
}

export default MyApp;
