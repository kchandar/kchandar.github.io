// Page of quotes to show
import React from 'react';

// PageOne Component
var ContactPage = React.createClass({
	// Render a <Quote> element for each element in the state
	render:function() {
		return (
            <form onSubmit={this.handleSubmit}>
                <h5>~search for a song~ </h5>
                <h8>click on the album cover to get the lyrics</h8>
                <input placeholder="anything (required)" onChange={this.handleSongChange} value={this.state.song} required={true}/>
                <input placeholder="artist only" onChange={this.handleArtistChange} value={this.state.artist}/>
                <input placeholder="album only" onChange={this.handleAlbumChange} value={this.state.album}/>
                <button type="submit" value="Submit">Submit</button>
                <button value="Clear" onClick={this.handleClear}>Clear</button>
            </form> 
		);
	}
});

export default ContactPage;
