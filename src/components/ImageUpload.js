import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';

import '../static/ImageUpload.css';
import ImageDisplay from './ImageDisplay';

class ImageUpload extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedFile: null,
            prediction: null
        };
    }

    fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name);

        axios.post('http://0.0.0.0:8080/predict', fd, {
            onUploadProgress: progressEvent => {
                console.log('Upload Progress: ' + 100 * Math.round(progressEvent.loaded / progressEvent.total) + '%');
            }
        })
            .then(res => {
                this.setState({
                    selectedFile: this.state.selectedFile,
                    prediction: res.data.prediction
                });
            });
    };

    render() {
        const selectedFile = this.state.selectedFile;
        const prediction = this.state.prediction;

        return (
            <div>
                <div className="image-upload">
                    <Dropzone
                        multiple={false}
                        accept="image/*"
                        onDrop={(files) => this.setState({selectedFile: files[0]})}>
                        <p>Drop an image or click to select a file</p>
                    </Dropzone>
                    <button className="upload-button"
                            onClick={this.fileUploadHandler}
                            disabled={!this.state.selectedFile}>
                        Predict dog breed
                    </button>
                </div>

                <div className="image-preview-container">

                    {selectedFile &&
                    <ImageDisplay image_url={this.state.selectedFile.preview}/>
                    }

                    {prediction &&
                    <ImageDisplay image_url={`./sample_images/${this.state.prediction}.jpg`}/>
                    }
                </div>


            </div>


        );
    }
}

export default ImageUpload;
;