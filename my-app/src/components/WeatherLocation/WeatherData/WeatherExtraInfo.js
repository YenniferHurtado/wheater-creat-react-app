import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'


const WeatherExtraInfo = ({ humidity, wind }) => (
    <div className="weatherExtraInfoCont">
        <span className="extraInfoText">{`Húmedad: ${humidity} %`}</span> 
        <span className="extraInfoText">{`Vientos: ${wind}`}</span>
    </div>
)

WeatherExtraInfo.protTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo; 