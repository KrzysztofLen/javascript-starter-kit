import './assets/stylesheets/index.scss';
import './assets/stylesheets/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app.jsx';

ReactDOM.render(<App />, document.getElementById('root'));

class Car {

    manufacturer(car) {
        document.write(`<h1 class="test">I have a ${car}</h1>`);
    }

}

const bmw = new Car;

bmw.manufacturer('bmw');