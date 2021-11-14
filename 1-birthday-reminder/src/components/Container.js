import React, { useState } from 'react';
import data from './data';
import People from './People';


const Container = () => {
    const [people, setPeople] = useState(data);
    const[refresh,setRefresh] = useState(false);

    function trigger(){
        setRefresh(!refresh);
        if(refresh){
            setPeople(data);
        }
        else{
            setPeople([]);
        }
    }
    return (
        <div className="container">
            <h2>Birthday Reminder</h2>
            <h4>{people.length} birthdays today</h4>
            <People people={people} />
            <button onClick={trigger}>
                {!refresh ? 'Clear All' : 'Refresh'}
            </button>
        </div>
    );
}

export default Container;