import React, { useState } from 'react';
import Header from "./Header";
import ColorPalette from "./ColorsPalette";
import Values from 'values.js';


const Home = () => {
    const [colorList,setColorList] = useState(new Values('#b134eb').all(10));

    
    return (
        <div>
            <Header setColors={setColorList}/>
            <ColorPalette colors={colorList}/>
        </div>
    );
}

export default Home;