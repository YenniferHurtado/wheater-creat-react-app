import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo'
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../contants/weathers'


const WeatherData = () => (
    <div>
        <WeatherTemperature 
            temperature={20} 
            weatherState={CLOUDY} />
        <WeatherExtraInfo humidity={50} wind={'10 m/s'}/>
    </div>
); 

export default WeatherData;