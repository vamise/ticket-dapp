import React, { Component } from 'react';

class Home extends Component {
	render() {
		return(
			<div className="mt-5">
				<h2>Welcome to Fyfy Ticket App.</h2>
				<hr />
				<p>The Fyfy Ticket DApp is a free service that provides ability to create events and sell tickets for them. Price for ticket can be in Ethereum or in Fyfy Token.</p>
				<p>All funds from selling tickets directly go to the event creator. Our smart contract do not keep any funds.</p>
				<p>Tickets created on this service are ERC721 tokens, that means that users are free to move, gift or sell those tickets to other users.</p>
				<p>Fyfy Ticket is DApp running on the Ethereum blockchain. That means that for use it you should have any Ethereum browser.</p>
			</div>
		);
	}
}

export default Home;
