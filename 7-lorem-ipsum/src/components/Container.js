import {useState} from 'react';
import data from './data.js';

const Container = () => {
    const [count,setCount] = useState(0);
    const [text,setText] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let amount = parseInt(count);
        setText(data.slice(0, amount));
      };

    return (
        <form className="form-input" onSubmit={handleSubmit}>
            <h1>Tired being searching Lorem Ipsum?</h1>
            <div className="input-section">
                <label htmlFor="count-input">No of Para</label>
                <input type="number" max="8" min="0" name="count-input" className="count-input" value={count} onChange={(e)=>setCount(e.target.value)} />
                <button className="btn">Generate</button>
            </div>
            <div className="lorem container" >
                {text.map((item,i)=>{
                    return <p key={i}>{item}</p>
                })}
            </div>
        </form>
    );
};

export default Container;