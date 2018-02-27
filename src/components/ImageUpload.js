import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';

import '../static/ImageUpload.css';
import ImageDisplay from './ImageDisplay';

class ImageUpload extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedFile: null
        };

        // this.fileSelectedHandler.bind(this);
    }

    // fileSelectedHandler => files {
    //
    //     console.log(file);
    //
    //     this.setState({
    //         selectedFile: file
    //     });
    //
    //     console.log(this.state);
    // };

    fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name);

        axios.post('http://0.0.0.0:8080/predict', fd, {
            onUploadProgress: progressEvent => {
                console.log('Upload Progress: ' + 100 * Math.round(progressEvent.loaded / progressEvent.total) + '%');
            }
        })
            .then(res => {
                console.log(res);
            })
    };

    render() {
        const selectedFile = this.state.selectedFile;

        return (
            <div>
                <div className="image-upload">

                    <Dropzone
                        multiple={false}
                        accept="image/*"
                        onDrop={(files) => this.setState({selectedFile: files[0]})}>
                        <p>Drop an image or click to select a file</p>
                    </Dropzone>

                    {/*<input style={{display: 'none'}}*/}
                    {/*type="file"*/}
                    {/*onChange={this.fileSelectedHandler}*/}
                    {/*ref={fileInput => this.fileInput = fileInput}*/}
                    {/*/>*/}

                    {/*<button onClick={() => this.fileInput.click()}>Pick File</button>*/}

                    {/*<button onClick={this.fileUploadHandler}>Upload</button>*/}


                </div>

                <div className="image-preview-container">

                    {selectedFile &&
                    <ImageDisplay image_url={this.state.selectedFile.preview}/>
                    }

                    {selectedFile &&
                    <ImageDisplay image_url={this.state.selectedFile.preview}/>
                    }

                </div>


            </div>


        );
    }
}

export default ImageUpload;
