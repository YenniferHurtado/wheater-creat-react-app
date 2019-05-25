import React from 'react';
import WeatherIcons from 'react-weathericons';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../contants/weathers'

const icons = {
    [CLOUD]: 'cloud',
    [CLOUDY]: 'cloudy',
    [SUN]: 'sun',
    [RAIN]: 'rain',
    [SNOW]: 'snow',
    [WINDY]: 'windy',
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];

    if (icon) {
        return <WeatherIcons name={icon} size="2px" />
    }
    else {
        return <WeatherIcons name={'day-sunny'} size="2px" />
    }
}

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div>
        {
            getWeatherIcon(weatherState)
        }
        <span>
            {`${temperature} Cº`}
        </span>
    </div>
);

export default WeatherTemperature 