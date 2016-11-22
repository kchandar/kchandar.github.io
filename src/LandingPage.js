// Landing page -- what users see on arrival
import React from 'react';
import './css/Landing.css'
var LandingPage = React.createClass({
    render() {
        return(
            <div className="landing">
				<div className="container">
					<div>
						<nav>
							<h2>Keertana Chandar</h2>
						</nav>
						<div id='contact'>
							<h5>Send me an email!</h5>
			                <h8>I will get back to you as soon as possible.</h8>
			            </div>
					</div>
				</div>
			</div>
        )
    }
});

export default LandingPage;
