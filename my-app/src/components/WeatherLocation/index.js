import React from 'react';
import Location from './Location'
import WeatherData from './WeatherData/index'

const WeatherLocation = () => (
    <div>
        <Location city={'Rio de Janeiro'} city2 ={'Lima'}/>
        <WeatherData />
    </div>
);



export default WeatherLocation;