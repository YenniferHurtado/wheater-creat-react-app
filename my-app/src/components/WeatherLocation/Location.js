import React from 'react';
import PropTypes from 'prop-types';

const Location = ({city, city2}) => (
    <div>
        <h1>
            {city} y también {city2}
        </h1>
    </div>
 );

Location.propTypes = {
    city: PropTypes.string.isRequired,
    city2: PropTypes.string.isRequired,
}

export default Location;