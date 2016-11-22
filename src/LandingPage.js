// Landing page -- what users see on arrival
import React from 'react';
import './css/Landing.css'
import 'materialize-css'

var LandingPage = React.createClass({
    render() {
        return(
            <div className="landing">
				<div className="container">
					<div>
						<nav>
							<h2>Keertana Chandar</h2>
						</nav>
						<div id='card'>
							<h5>Thanks for visiting my page!</h5>
			                <h8>Learn more about what I have done and send me a message.</h8>

			            </div>
					</div>
				</div>
				<footer>
					<div>
						
					</div>
				</footer>
			</div>
        )
    }
});

export default LandingPage;
