import React, {Component} from 'react';

import "../static/ImageDisplay.css"

export default class ImageDisplay extends Component {

    render() {

        return (
            <div className="image-display">
                <div className="image-container">
                    {
                        this.props.image_url && <img src={this.props.image_url} />
                    }
                </div>
            </div>
        )
    }
}