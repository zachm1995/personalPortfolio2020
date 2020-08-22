import React, {useEffect } from 'react';

export const useScript = (scriptUrl) => {

	useEffect(() => {

		// Create new script element on HTML document
		const scriptElement = document.createElement('script');

		// Add the url from parameters as the source for the script
		scriptElement.src = url;

		// Append the script element to the body
		document.body.appendChild(scriptElement);

		return () => {
			document.body.removeChild(scriptElement);
		}

	}, [scriptUrl])
}