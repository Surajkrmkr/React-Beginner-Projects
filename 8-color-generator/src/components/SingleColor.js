import { useEffect,useState } from "react";

const SingleColor = ({ singleColor, length, index }) => {
    const [copy, setCopy] = useState(false);
    const copyColor = (value) => {
        navigator.clipboard.writeText('#' + value);
        setCopy(true);
    }
    useEffect(() => {
        let time = setTimeout(() => {
            setCopy(false);
        }, 1000);
        return () => clearTimeout(time);
    }, [copy]);
    return (
        <div key={index} className={`single-color ${index > length / 2 && 'darker'}`}
            style={{ backgroundColor: `#${singleColor.hex}` }}
            onClick={() => copyColor(singleColor.hex)}>
            <p>#{singleColor.hex.toUpperCase()}</p>
            <p className="percent">{singleColor.weight}%</p>
            {copy && <p>Copied</p>}
        </div>
    );
}

export default SingleColor;