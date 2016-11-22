// Page of quotes to show
import React from 'react';
import $ from 'jquery';
import Baby from 'babyparse';
import './css/Portfolio.css'

// PageOne Component
var PortfolioPage = React.createClass({
	getInitialState:function(){
		return{data:[]}
	},
	componentDidMount:function(){
		$.get('data/portfolio.csv').then(function(data) {
			var parsed = Baby.parse(data, {header:true});
			this.setState({data: parsed.data})
		}.bind(this));
	},
	render:function() {
		return (
			<div className="container">
				<div>
					<nav>
						<h2>Projects</h2>
					</nav>
				</div>
				{this.state.data.map(function(d, i) {
                    return(
		                <div className="col s6" key={d.Title + i}>
		                    <div className="card">
		                        <div className="card-content info">
		                            <span className='portfolio-title'>{d.Title}</span>
		                            <br />
		                            <span className='portfolio-desc'>{d.Description}</span>
		                        </div> 
		                        <div className="card-image">
		                            <img src={d.img}/>
		                        </div>                       
		                        <div className="card-content url">
									<a href={d.Url} target="_blank">Visit Page</a>
		                        </div>                     
		                    </div>
		                </div>
	                )})
				}
			</div>
		);
	}
});

export default PortfolioPage;