import React, {Component} from 'react';
import './static/App.css';
import ImageUpload from './components/ImageUpload';
import Header from './components/Header';

class App extends Component {



    render() {
        return (
            <div className="App">
                <Header/>
                <ImageUpload/>
            </div>
        );
    }
}

export default App;
