import React from 'react';
import PropTypes from 'prop-types'
import WeatherData from './../WeatherLocation/WeatherData/index'

const ForecastItem = ({ weekDay, hour, data }) => (
  <div>
      {weekDay} Hora: {hour} hs.
      <WeatherData data={data}/>
  </div>  
);

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.string.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}

export default ForecastItem;