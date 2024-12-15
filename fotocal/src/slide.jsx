import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './slide.css';

const Example = () => {
    const images = [
        "https://lh3.googleusercontent.com/pw/AP1GczNIMgaI3kaR2OxrOtjPoM1ig_x7-P-XB9CPbeoWkTBzsFRT-agmdN87DL81b-DVEHm0Oh0MuYO0ANb9BcYlQB9cx592rxeuJH7GnCuRHuhDAl9ERJ8-wCTD3BOKZJghdtpS3tPEiPGEzs4HM7mx9RXW=w1435-h646-s-no?authuser=0",
        // "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        // "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];
    
    return (
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }} />
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url("/20241113_125806.jpg")` }} />
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url("/20241121_121804.jpg")` }} />      
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url("/IMG20241017094525.jpg")` }} />
            </div>
        </Slide>
    );
};

export default Example;