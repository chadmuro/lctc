import '../styles/globals.scss';
import MediumContextProvider from '../contexts/MediumContext';

function MyApp({ Component, pageProps }) {
	return (
		<MediumContextProvider>
			<Component {...pageProps} />
		</MediumContextProvider>
	);
}

export default MyApp;
