import { useEffect, useState } from 'react';

//Custom hook for handling reviews data
const useServices = () => {
    const [services, setServices] = useState([])

    //Getting customer reviews data
    useEffect(() => {
        fetch("services-data.json")
        .then(response => response.json())
        .then(data => setServices(data))
    }, []);

    return [services, setServices];
};

export default useServices;