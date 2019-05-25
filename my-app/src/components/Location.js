import React from 'react';

//Que el valor que le damos no sea fijo sino que responda 
//segun el parametro que le pasemos
//si una funcion es de una linea puedo hacerlo con parantesis
//pero si es mas de una linea uso las llaves con el return
    // console.log(props)
    // debugger;



const Location = ({city, city2}) => (
    <div>
        <h1>
            {city} y también {city2}
        </h1>
    </div>
 );

export default Location;