import React, { useEffect, useState } from 'react';
import "../css/style.css";

const renderData = (data) => {

    return (
        <ul>
            {data.map((todo, index) => {
                return <li key={index}>{todo.title}</li>;
            })}
        </ul>
    );

};

function PaginationComponent() {
    const [data, setData] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    const [pageNumberLimit, setPageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);


    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    // 30 = 3 *10

    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItem = data.slice(indexOfFirstItem, indexOfLastItem);

    const pages = [];
    let pageCount = Math.ceil(data.length / itemsPerPage);
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
        pages.push(i);
    }

    const renderPageNumbers = pages.map(num => {

        if (num < maxPageNumberLimit + 1 && num > minPageNumberLimit) {
            return (
                <li key={num}
                    id={num}
                    onClick={handleClick}
                    className={currentPage == num ? 'active' : null}
                >
                    {num}
                </li>
            )
        } else {
            return null;
        }

    });

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos`)
            .then((response) => response.json())
            .then((json) => setData(json));
    }, []);

    const handleNextBtn = () => {
        setCurrentPage(currentPage + 1);

        if (currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };

    const handlePreBtn = () => {
        setCurrentPage(currentPage - 1);
        if ((currentPage - 1) % pageNumberLimit == 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

    let pageIncrementBtn = null;
    if (pages.length > maxPageNumberLimit) {
        pageIncrementBtn = <li onClick={handleNextBtn}> &hellip;</li>;

    }

    let pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <li onClick={handlePreBtn}> &hellip;</li>;

    }    

    const handleLoadMore = () => {
        setItemsPerPage(itemsPerPage +5);
    };

    return (
        <div>
            <h1>Pagination</h1> <br />
            <hr />

            {renderData(currentItem)}

            <ul className="pageNumbers">
                <li>
                    <button
                        onClick={handlePreBtn}
                        disabled={currentPage == pages[0] ? true : false}
                    >
                        Pre
                    </button>
                </li>

                {pageDecrementBtn}
                {renderPageNumbers}
                {pageIncrementBtn}


                <li>
                    <button
                        onClick={handleNextBtn}
                        disabled={currentPage == pages[pages.length -1] ? true : false}
                    >
                        Next
                    </button>
                </li>
            </ul>

            <button onClick={handleLoadMore} className="loadmore">
                Load More
            </button>
        </div>
    )
}

export default PaginationComponent

