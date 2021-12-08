import react from 'react';
import List from './List.js';
import { useState, useEffect } from 'react';

const Home = () => {
    const [data, setData] = useState('');
    const [list, setList] = useState([]);
    const [alert, setAlert] = useState({ status: false, message: '', type: '' });
    const [isEditing, setIsEditing] = useState(false);
    const [editItemId, setEditItemId] = useState(null);

    const addItemToList = (e) => {
        e.preventDefault();
        if (!data) {
            setAlertMessage(true, 'Please enter an item', 'danger');
        }
        else if (isEditing && data) {
            setList(list.map((item) => {
                if (item.id === editItemId) {
                    return { ...item, name: data }
                }
                return item;
            }));
            setAlertMessage(true, 'Item updated', 'success');
            setIsEditing(false);
            setEditItemId(null);
            setData('');
        }
        else {
            let name = data;
            let id = new Date().getTime().toString();
            let item = { id, name };
            setList([...list, item]);
            setData('');
            setAlertMessage(true, 'Item added to list', 'success');
        }
    }

    const deleteItem = (id) =>{
        setList(
            list.filter((item)=>{
                return item.id != id;
            })
        );
        setAlertMessage(true, 'Item deleted', 'danger');
    }

    const editItem = (id) => {
        setIsEditing(true);
        setEditItemId(id);
        setData(list.find(item => item.id === id).name);
    }

    useEffect(() => {
        let timeOut = setTimeout(() => {
            setAlertMessage(false, '', '');
        }, 3000);
        return () => clearTimeout(timeOut);
    }, [alert])

    const setAlertMessage = (status, message, type) => {
        setAlert({ status, message, type });
    }

    return (
        <div className="grocery-container">
            <h2>Grocery Buds</h2>
            {alert.status && <p className={`alert ${alert.type}`}>{alert.message}</p>}
            <form className="input-section" onSubmit={addItemToList}>
                <input type="text" value={data} placeholder="eg. Banana" onChange={(e) => setData(e.target.value)} />
                <button className="add-btn">{isEditing ? 'Edit' : 'Add'}</button>
            </form>
            {/* {list.length != 0 && <h2 className="list-info">List goes here :</h2>} */}
            <ol className="list-section">
                <List list={list} editItem={editItem} deleteItem={deleteItem}/>
            </ol>
            {list.length != 0 && <button onClick={()=>{
                setList([]);
                setAlertMessage(true, 'List cleared', 'success');
            }} className="btn-clr">Clear list</button>}
        </div>
    );
}

export default Home;