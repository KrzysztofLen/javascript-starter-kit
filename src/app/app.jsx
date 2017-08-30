import React, { Component } from 'react';
import slider01 from 'images/slider01.jpg';
import slider02 from 'images/slider02.jpg';
import slider03 from 'images/slider03.jpg';

const hello = () => {
    return (
        <div className="container">
            <h1 className="bigtest">Bigger Test</h1>
            <h2 className="header">Image Container</h2>
            <div className="image-wrapper">
                <img src={slider01} className="image-wrapper__image" alt=""/>
            </div>

            <div className="image-wrapper">
                <img src={slider02} className="image-wrapper__image" alt=""/>
            </div>

            <div className="image-wrapper">
                <img src={slider03} className="image-wrapper__image" alt=""/>
            </div>

        </div>
    )
}

export default hello;