import React from 'react';
import './css/style.css';

function header(){
    return(
        <div className="header-section">
            <header className="header">
                <div className="left-header-content">
                    {/*background image
                    tim-van-der-kuip-CPs2X8JYmS8-unsplash.jpg
                    */}
                </div>
                <div className="right-header-content">
                    <div className="content-header">
                    <section className="introduction">
                    <div className="content-intro">
                    <p className="hello">Hello!</p>
                    <h1 className="who-I-am">I'm Koffivi</h1>
                    <p className="about-me">Full stack developer with 4 years of coding experience. I have worked in</p>
                    <input type="button" className="view-projects" value="View Projects"></input>
                    </div>
                    </section>
                    </div>
                    <h1 className="Design-background">Desig</h1>
                </div>
            </header>
        </div>
    );
}
export default header;