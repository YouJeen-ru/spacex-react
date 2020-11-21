import React from 'react';
import './main.css'

const Main = (props) => {
    return (
        <>
            <section className="main">
                <h1 className="title">
                    {props.rocket}
                </h1>

                <div className="video-container">
                    <video className="video" autoPlay loop muted src="./video/moon.mp4"/>

                </div>
            </section>
        </>
    );
};

export default Main;