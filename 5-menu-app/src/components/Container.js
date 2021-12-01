import data from './data';
import { useState } from 'react';
import TabNavigation from './Tab';
import ListMenu from './List';
const allCat = ['All', ... new Set(data.map(item => item.category))];

const Container = () => {
    const [menu, setMenu] = useState(data);
    const [category, setCategory] = useState(allCat);

    const filterCat = (category) => {
        if (category === 'All') {
            setMenu(data);
            return;
        }
        const newMenu = data.filter(item => item.category === category);
        setMenu(newMenu);
    }
    return (
        <div>
            <h1>Our Menu</h1>
            <div className="divider"></div>
            <TabNavigation category={category} filterCat={filterCat} />
            <ListMenu menu={menu} />
        </div>
    );
}

export default Container;