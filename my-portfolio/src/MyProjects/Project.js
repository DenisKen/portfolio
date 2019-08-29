import React from 'react';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

import './Project.css'


const project = (props) => {
    
    const VideoElem = React.createElement('video');
    
    return (
        <div className={"Project-Content " + props.className} style={{marginTop: props.marginTop}}>
            <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
                <div className="Project-Picture">                
                    <div className="Project-Picture--Active" onMouseOver={playVideo}>
                        <video className="Project-Video" loop autoPlay>
                            <source src={props.video} type="video/mp4"/>
                        </video>              
                        <img className="Project-Picture--Static" src={props.image} alt={props.alt}/>
                    </div>        
                </div> 
                <div className="Project-Picture--TextLabel"> {props.subtitle} </div>
            </ScrollAnimation>
        </div>
    )
}

const playVideo = () => {
    
    console.log("asdasd");
}   
export default project;