import React, {Component} from 'react';

import "../static/ImageDisplay.css"

export default class ImageDisplay extends Component {

    render() {

        if(!this.props.prediction) {
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

        else {
            return (
                <div className="image-display">
                    <div className="image-container">
                        <p>Prediction: {this.state.image_url}</p>
                        <img src={this.props.image_url} />
                    </div>
                </div>
            )
        }

    }
}