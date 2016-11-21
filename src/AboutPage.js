// Page of quotes to show
import React from 'react';

// PageOne Component
var AboutPage = React.createClass({
	// Render a <Quote> element for each element in the state
	render:function() {
		return (
	        <div className="col s6">
	            <div className="card">
	                <div className="card-image">
	                    IMAGE OF ME
	                </div>
	                <div className="card-content info">
	                	DESCRIPTION
	                </div>                                            
	            </div>
	        </div>
		);
	}
});

export default AboutPage;