import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CarDetails = ({carId}) => {
    const [carDetails, setCarDetails] = useState(null);

    useEffect(() => {
        const fetchCarDetails = async () => {
        try {
            const response = await axios.get('api/cars/${carId')
    });

    setCarDetails(response.data);
} catch (error) {
    console.error('Error fetching car details: ', error);
}
};

fetchCarDetails();
}, [carId]);

    return ( 
        <div>
            <h1>{carDetails.make} {carDetails.model}</h1>
        </div>
     );
}
 
export default CarDetails;