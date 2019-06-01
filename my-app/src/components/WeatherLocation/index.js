
import React, { Component } from 'react';
import Location from './Location'
import WeatherData from './WeatherData/index';
import { api_weather } from '../../contants/api_url';
import { transformWeather } from '../services/tranformWeather';
import './styles.css';

import {
    RAIN,
} from './../../contants/weathers';


const data = {
    temperature: 7,
    weatherState: RAIN,
    humidity: 10,
    wind: '10 m/s',
}

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Buenos Aires',
            data,
        }
    }

    handleUpdateClick = () => {
        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data);
            this.setState({
                data: newWeather,
            })
        });

    };

    render () {
        const { city, data } = this.state;
        return(
            <div className="weatherLocationCont">
                <Location city={city}/>
                <WeatherData data={data}/>
                <button onClick={this.handleUpdateClick}> Actualizar </button>
            </div>
        )
    }
};



export default WeatherLocation;