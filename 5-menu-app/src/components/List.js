const ListMenu = ({menu})=>{
    return (
        <div className="menu-center">
            {menu.map((item)=>{
                const { id, title, img, desc, price } = item;
                return(
                    <div className="menu-item" key={id}>
                        <img src={img} alt={title} />
                        <div className="menu-info">
                            <div className="menu-details">
                                <p>{title}</p>
                                <p>{price} $</p>
                            </div>
                            <p>{desc}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default ListMenu;