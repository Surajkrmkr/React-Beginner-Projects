const TabNavigation = ({ category, filterCat }) => {
    return (
        <div>
            {category.map((item, index) => {
                return(
                    <button type="button" key={index} onClick={()=>filterCat(item)}>
                        {item}
                    </button>);
                })}
        </div>
    )
}

export default TabNavigation;