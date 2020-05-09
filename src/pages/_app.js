<%_ if (tokens.tailwind) { _%>
import '../styles.css';
<%_ } _%>
import React from 'react';

const App = ({ Component, pageProps }) => {
	return <Component {...pageProps} />;
};

export default App;
