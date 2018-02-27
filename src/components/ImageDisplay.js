import React, {Component} from 'react';

import "../static/ImageDisplay.css"

export default class ImageDisplay extends Component {

    render() {

        return (
            <div className="image-display">
                <div className="image-container">
                    <img src={this.props.image_url}/>
                </div>
            </div>
        )
    }
}