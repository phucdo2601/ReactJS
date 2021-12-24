import React, { useEffect, useState } from 'react';

const renderData = (data) => {

    return(
        <ul>
            {data.map((todo,index) => {
                return <li key={index}>{todo.title}</li>;
            })}
        </ul>
    );

};

function PaginationComponent() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then((response) => response.json())
        .then((json) => setData(json));
    }, [])

    return (
        <div>
            <h1>Pagination</h1> <br/>
            <hr  />
            {renderData(data)}
        </div>
    )
}

export default PaginationComponent

