// Page of quotes to show
import React from 'react';
import $ from 'jquery';
import './css/Contact.css'

// PageOne Component
var ContactPage = React.createClass({
	// Render a <Quote> element for each element in the state
    getInitialState:function() {
        return {name:"", email:"", message:""}
    },
    handleNameChange:function(e) {
        this.setState({name: e.target.value});
    },

    handleEmailChange:function(e) {
        this.setState({email: e.target.value});
    },

    handleMessageChange:function(e) {
        this.setState({message: e.target.value});
    }, 

    handleSubmit:function(e) {
        e.preventDefault();
        this.setState({name: "", email: "", message: ""});
    },  
	render:function() {
		return (
			<div className="container">
				<div>
					<nav>
						<h2>Contact Me</h2>
					</nav>
					<div id='contact'>
						<h5>Send me an email!</h5>
		                <h8>I will get back to you as soon as possible.</h8>
		            </div>
				</div>
	            <form id='contact-form' onSubmit={this.handleSubmit}>
	                <input placeholder="Name" type="text" required={true} id='name' onChange={this.handleNameChange} value={this.state.name}/>
	                <input placeholder="Email" type="email" required={true} onChange={this.handleEmailChange} value={this.state.email}/>
	                <textarea id="textarea1" class="materialize-textarea" placeholder="Message" 
	                onChange={this.handleMessageChange} value={this.state.message} required={true}></textarea>
	                <button type="submit" value="Submit" className='btn'>Submit</button>
	            </form> 
            </div>
		);
	}
});

export default ContactPage;
