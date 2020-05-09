<%_ if (tokens.tailwind) { _%>
import '../styles.css';
<%_ } _%>
import React from 'react';
import { AppProps } from 'next/app';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	return <Component {...pageProps} />;
};

export default App;
