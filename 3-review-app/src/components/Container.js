import React, { useState } from 'react';
import people from './data';
import { CgArrowLeftR, CgArrowRightR, CgYinyang } from "react-icons/cg";

const Container = () => {
    const [index, setIndex] = useState(0);
    const { name, image, job, text } = people[index];

    function goPrev() {
        setIndex((index) => {
            var newIndex = index - 1;
            return checkEnd(newIndex);
        });
    }

    function goNext() {
        setIndex((index) => {
            var newIndex = index + 1;
            return checkEnd(newIndex);
        });
    }

    function random() {
        setIndex((index) => {
            var randomIndex = Math.floor(Math.random() * people.length);
            if (randomIndex == index) {
                randomIndex = randomIndex + 1;
            }
            return checkEnd(randomIndex);
        });

    }

    function checkEnd(num) {
        if (num < 0) {
            return people.length - 1;
        }
        else if (num > people.length - 1) {
            return 0;
        }
        else {
            return num;
        }
    }

    return (
        <div className="container">
            <div className="img-container">
                <img src={image} alt={name} />
            </div>
            <h1>{name}</h1>
            <h4>{job}</h4>
            <p>{text}</p>
            <div className="navigate">
                <i className="prev">
                    <CgArrowLeftR onClick={goPrev} className="icons" />
                    <span></span>
                    <CgArrowRightR onClick={goNext} className="icons" />
                </i>
            </div>
            <button onClick={random}>
                Random
            </button>
        </div>
    );
}

export default Container;