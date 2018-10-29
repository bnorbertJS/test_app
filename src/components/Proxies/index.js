import React from 'react'

const Button = (props) => (
    <input tabIndex="0" type="button" {...props} />
)

const InputField = (props) => (
    <input tabIndex="0" {...props} />
)

const Image = ({src: src, ...rest}) => (
    <img tabIndex="0" src={src} {...rest}/>
)

const Section = ({title, text, children}) => (
    <div tabIndex="0" className="section">
        <h3>{title}</h3>
        <p>{text}</p>
        {children &&
            children
        }
        <hr/>
    </div>
)

const Video = ({src}) => (
        <video className="detail-content" controls="controls">
            <source src={src} type="video/mp4" />
        </video>
)

const Notification = ({type, text}) => (
    <div className={`notification ${type === "error" ? "error" : "success"}`}>
        <p>{text}</p>
    </div>
)

/*
SVG Loading Indicator.
Source: https://codepen.io/aurer/pen/jEGbA
*/
const LoadingIndicator = () =>(
    <div className="loader loader--style2" title="1">
        <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
            width="40px" height="40px" viewBox="0 0 50 50" styles="enable-background:new 0 0 50 50;">
        <path fill="#000" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z" >
            <animateTransform attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="0.6s"
            repeatCount="indefinite"/>
            </path>
        </svg>
    </div>
)

export {Button, InputField, Section, Image, Video, LoadingIndicator, Notification}