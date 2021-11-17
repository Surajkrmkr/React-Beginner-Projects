
import React, { useState } from 'react';
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const Question = ({ id, title, info }) => {
    const [isExpand, setIsExpand] = useState(false);
    return (
        <>
            <div className="question-container">
                <div className="upper">
                    <h1>
                        {title}
                    </h1>
                    <button onClick={() => setIsExpand(!isExpand)}>
                        {isExpand ? <BiChevronUp /> : <BiChevronDown />}
                    </button>
                </div>
                <div className="lower">
                    {!isExpand ? '' : info}
                </div>
            </div>
        </>
    );
}
export default Question;