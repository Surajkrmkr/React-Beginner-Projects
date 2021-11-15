import React, { useEffect, useState } from 'react';
import Tours from './Tours';


const Container = () => {
    const url = "https://course-api.com/react-tours-project";

    const [tours, setTours] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchTours = async() =>{
        setIsLoading(true);
        try{
            const response = await fetch(url);
            const data = await response.json();
            setTours(data);
            setIsLoading(false);
        }
        catch(err){
            console.log(err);
            setIsLoading(false);
        }
        
    }

    const removeTour = (id) => {
        const newTour = tours.filter((tour)=>{
            return tour.id !== id;
        });
        setTours(newTour);
    }

    useEffect(()=>{
        fetchTours();
    },[]);

    if(isLoading){
        return (
        <div className="container"><h1>Loading...</h1></div>
        );
    }
    else if(tours.length == 0){
        return (
        <div className="container">
            <h1>No Tours Left</h1>
            <button onClick={fetchTours}>
                Refresh
            </button>
        </div>
        );
    }
    else{
        return(
            <Tours tour = {tours} remove={removeTour}/>
        );
    }
}

export default Container;