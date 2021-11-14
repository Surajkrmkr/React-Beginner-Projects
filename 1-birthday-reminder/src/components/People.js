const People = (props) => {
    return (
        props.people.map((person, i) => {
            return (
                <article key={i}>
                    <img src={person.image} alt={person.name} />
                    <div className="detail">
                        <h4>{person.name}</h4>
                        <p>Age : {person.age}</p>
                    </div>
                </article>
            )
        })
    );
}


export default People;