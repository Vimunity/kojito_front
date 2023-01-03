import React, {Component} from 'react';
import "./navbar.css";

class VideoBanner extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'http://techslides.com/demos/sample-videos/small.mp4'
        }
    }

    render () {
        return (
            <video className='videoBanner' loop autoPlay>
                <source src={this.state.videoURL} type="video/mp4" />  
            </video>
        )
    }
};

export default VideoBanner;