import React, { Component } from 'react';
import '../styling/player.css';

var frameHeight = (window.innerWidth < 800 ? window.innerHeight/2 : "auto")

class Player extends Component {
    render() {
        return (
            <div id="Player">
                <iframe src="https://player.vimeo.com/video/163275571?autoplay=1&title=0&byline=0&portrait=0&&color=FF9100" width="100%" height={frameHeight} frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                <div className="intro-text">
                    <h1> Welcome to Charlottesville!</h1>
                    <a href="#Story"><h4> Meet our city.</h4> </a>
                </div>
            </div>
        );
    }
}

export default Player;