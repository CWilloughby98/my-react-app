import React from "react";
import { getIconFomWeather } from "../lib/utils";
import { useContext } from "react";
import { IsNightContext } from "../App";

const Carousel = ({props}) => {

    const isNight = useContext(IsNightContext) 

    return (
        <div style={!isNight ? {filter:"invert(1)"} : {}} className="card-array d-flex overflow-x-scroll">
            <div className="d-flex">
            {props.hours.map((elem, index) => 
                (<div key={index} className="card-container bg-transparent card p-4 py-5 ms-4 border-3 border-opacity-50 border-light" >
                    <div className="card-body text-center">
                        <img src={getIconFomWeather(elem.weather, elem.hour < 8 || elem.hour > 22)} className="card-weather" alt="Weather Icon"/>
                        <p className="card-text mt-2">{elem.hour % 12} {elem.hour > 12 ? "pm" : "am"}</p>
                        <p className="card-text">{elem.temp + "º"}</p>
                    </div>
                </div>)
            )}
            </div>
        </div>
    );
}

export default Carousel