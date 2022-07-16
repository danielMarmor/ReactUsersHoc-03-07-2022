import React from "react";
import { useRef } from "react";

export const WithRandomBackground =(WrappedComponent)=>{
    const backgroundWrapper=(props)=>{       
        const rand_R = Math.floor(Math.random() * 255);
        const rand_G = Math.floor(Math.random() * 255);
        const rand_B = Math.floor(Math.random() * 255);  

        const composedRGB  =`rgb(${rand_R}, ${rand_G}, ${rand_B})`;   
        return <div className="autoRectangle" style={{backgroundColor:composedRGB}}>
            <WrappedComponent  {...props}/>
            </div>  
    } 
    return backgroundWrapper;
}

export const withRandomBackgroundGeneric =({children})=>{
    const backgroundWrapper=(props)=>{       
        const rand_R = Math.floor(Math.random() * 255);
        const rand_G = Math.floor(Math.random() * 255);
        const rand_B = Math.floor(Math.random() * 255);  

        const composedRGB  =`rgb(${rand_R}, ${rand_G}, ${rand_B})`; 
        const clones = React.Children.map(children, child =>{
            return React.cloneElement(child, {style :{backgroundColor:composedRGB}})
        })
        return (<React.Fragment>

        </React.Fragment>)  
    } 
    return backgroundWrapper;
}