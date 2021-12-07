import { useState } from "react";
import SingleColor from "./SingleColor";


const ColorPalette = ({ colors }) => {
   
    return (
        <section className="color-palette">
            {
                colors.map((color, index) => {
                    // let rgbColor = color.rgb.join(',');
                    return (
                        <SingleColor index={index} singleColor={color} length={colors.length}/>
                    );
                })
            }
        </section>
    );
}

export default ColorPalette;