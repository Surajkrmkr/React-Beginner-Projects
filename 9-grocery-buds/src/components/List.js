import react from 'react';
import { useState, useEffect } from 'react';

const List = ({ list,editItem,deleteItem}) => {

    return (
        <div className="list-container">
            
            {list.map((item) => {
                const { id, name } = item;
                return (
                    <li key={id} className="list-item">
                        {name}
                        <div className="btn-grp">
                            <span class="material-icons" onClick={()=>editItem(id)} >
                                edit
                            </span>
                            <span onClick={()=>deleteItem(id)} class="material-icons">
                                delete
                            </span>
                        </div>
                    </li>
                );
            })}
            
        </div>
    );
}

export default List;