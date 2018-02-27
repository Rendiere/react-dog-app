import React, {Component} from 'react';
import '../static/Header.css'


export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <h1 className="Header-title">Dog Breed Classifier</h1>
                <p className="Header-intro">Upload an image</p>
            </div>

        )
    }
}