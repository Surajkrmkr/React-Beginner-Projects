import Questions from './Question';
import data from './data';
import { useState } from 'react';

const Container = () => {
    const [questions, setQuestion] = useState(data);
    return (
        <div className="container">
            <div className="left">
                <h3>
                    Questions And Answers About Login
                </h3>
            </div>
            <div className="ques">
                {questions.map((question) => {
                    return <Questions key={question.id} {...question} />
                })}
            </div>
        </div>
    );
}

export default Container;