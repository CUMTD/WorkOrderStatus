import * as React from 'react';
import * as reactDom from 'react-dom';

import { App } from './Components/App';

class Index {
	private readonly domElement: Element;
	private readonly jsxElement: JSX.Element;
	constructor(elementName: string) {
		this.domElement = document.getElementById(elementName);
		this.jsxElement = <App />;
	}

	public render: () => void = () => reactDom.render(this.jsxElement, this.domElement);
}

const init: () => void = () => {
	const app: Index = new Index('app');
	app.render();
	document.removeEventListener('DOMContentLoaded', init);
};

document.addEventListener('DOMContentLoaded', init, false);
