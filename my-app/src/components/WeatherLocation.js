import React from 'react';
import Location from './Location'
import WeatherData from './WeatherData'

const WeatherLocation = () => (
    <div>
        <Location city={'Rio de Janeiero'} city2 ={'Lima'}/>
        <WeatherData />
    </div>
);

export default WeatherLocation;