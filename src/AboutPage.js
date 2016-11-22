// Page of quotes to show
import React from 'react';
import './css/About.css'

// PageOne Component
var AboutPage = React.createClass({
	// Render a <Quote> element for each element in the state
	render:function() {
		return (
			<div className="container">
				<div>
					<nav>
						<h3>About Me</h3>
					</nav>
				</div>
		        <div className="col s6">
		            <div className="card">
		                <div className="card-image">
		                    <img src='../imgs/profile.jpg' alt='Profile Picture' id='profile'/>
		                </div>
		                <div className="card-content info">
		                	DESCRIPTION
		                </div>                                            
		            </div>
		        </div>
		    </div>
		);
	}
});

export default AboutPage;