import React from 'react';
import ReactDOM from 'react-dom';
import { DrizzleProvider } from "drizzle-react";
import App from './components/App';

import OpenEvents from '../build/contracts/OpenEvents.json';
import FyfyTicketToken from '../build/contracts/FyfyTicketToken.json';

const options = {
	contracts: [OpenEvents, FyfyTicketToken],
	events: {
		OpenEvents: ['CreatedEvent']
	}
};

ReactDOM.render(
    <DrizzleProvider options={options}>
		<App />
	</DrizzleProvider>,
    document.getElementById("root")
);
