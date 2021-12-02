import React, { useState, useEffect } from 'react';
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const url = "https://course-api.com/react-tabs-project";

const Container = () => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [value, setValue] = useState(0);

    const fetchData = async () => {
        const response = await fetch(url);
        const newData = await response.json();
        setData(newData);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])
    if (loading) {
        return <h1>Loading...</h1>
    }
    const { title, duties, dates, company } = data[value];
    return (
        <div className="bodyCenter">
            <h1>Experience</h1>
            <div className="divider"></div>
            <div className="experience-container">
                <div className="btn-coll">
                    {data.map((item, index) => {
                        return (
                            <button className={`btn ${index === value && 'btn-active'}`} key={index} onClick={() => setValue(index)}>
                                {item.company}
                            </button>)

                    })}
                </div>
                <div className="job-desc container">
                    <h1>{title}</h1>
                    <h3>{company}</h3>
                    <p>{dates}</p>
                    {duties.map((duty, index) => {
                        return <div className="dutyList"><BsFillArrowRightCircleFill className="icon" /><p key={index}>{duty}</p></div>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Container;