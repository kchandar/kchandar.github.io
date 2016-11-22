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
		                	<h5>School</h5>
		                	<p>I am currently pursuing an Informatics degree at the University of Washington.</p>
		                </div> 
		                <div className="card-content info">
		                	<h5>Experience</h5>
		                	<ul>
		                		<li>I interned at IMDb, a subsidiary of Amazon, over summer 2016. 
		                		I worked on primarily front end work.</li>
		                		<li>I was an instructor at Coding With Kids in 2015. I went to schools and 
		                		taught elementary school children the basics of prgramming.</li>
		                	</ul>
		                </div>  
		                <div className="card-content info">
		                	<h5>Skills</h5>
		                	<ul>
		                		<li>JavaScript</li>
		                		<li>React</li>
		                		<li>Java</li>
		                	</ul>
		                </div> 	                                                          
		            </div>
		        </div>
		    </div>
		);
	}
});

export default AboutPage;