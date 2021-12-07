import { useState } from "react";
import Values from 'values.js';

const Header = ({ setColors }) => {

    const [color, setColor] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (color === '') {
            setColors(new Values('#b134eb').all(10));
        } else {
            try {
                let newColorPalette = new Values(color).all(10);
                setColors(newColorPalette);
                setError(false);

            } catch (error) {
                console.log(error);
                setError(true);
            }
        }
    }

    return (
        <form className="header-bg" onSubmit={handleSubmit}>
            <div className="header">
                <p className="title">Color Palette Generator</p>
                <div className="input-section">
                    <input
                        type="text"
                        className="input-color"
                        onChange={(e) => setColor(e.target.value)}
                        placeholder="#B134EB"
                    />
                    <button className="btn">Generate</button>
                </div>
            </div>
            {error ? <div className="alert-row">
                <p className="alert">Type hex value correctly</p>
                <span class="material-icons" onClick={() => setError(false)}>
                    close
                </span>
            </div> : <p />}
            
        </form>
    );
}

export default Header;