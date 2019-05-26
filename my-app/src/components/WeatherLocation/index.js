import React from 'react';
import Location from './Location'
import WeatherData from './WeatherData/index'
import './styles.css'

const WeatherLocation = () => (
    <div className="weatherLocationCont">
        <Location city={'Rio de Janeiro'}/>
        <WeatherData />
    </div>
);



export default WeatherLocation;