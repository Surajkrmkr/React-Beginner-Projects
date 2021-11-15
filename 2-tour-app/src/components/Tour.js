import React,{useState} from "react";

const Tour = ({id, image, info, name, price,remove}) => {  
    const [isExpand ,setIsExpand] = useState(false);

    const toggleExpand = () => {
        setIsExpand(!isExpand);
    }

    return (
        <div className="card">
            <img src={image} alt={name} />
            <div className="name-row">
                <h4>{name}</h4>
                <div className="price">
                    <h4>${price}</h4>
                </div>
            </div>
            <p>{isExpand ? info : info.substring(0,200)} <a onClick={toggleExpand}>
               {isExpand? '  Show less' : ' ...Read more'}</a> </p>
            <button onClick={()=>remove(id)}>Not Intrested</button>
        </div>
    );
}

export default Tour;