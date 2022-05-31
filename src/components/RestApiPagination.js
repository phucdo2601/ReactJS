import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./restApiPaging.css";

const NewsCard = (props) => {
  return (
    <>
      <div style={{ padding: "20" }}>
        <a href={props.url}>
          {props.title} by {props.author}
        </a>
      </div>
    </>
  );
};

const RestApiPagination = () => {
  const [hits, setHits] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setcurrentPage] = useState(0);
  const [isLoaded, setisLoaded] = useState(false);
  const [query, setQuery] = useState("startups");

  const URL = `https://hn.algolia.com/api/v1/search?query=${query}`;

  let limit = 10;

  // const handleFetch = () => {
  //   axios
  //     .get(URL)
  //     .then((res) => {
  //       console.log(res.data);
  //       const hitList = res.data.hits;
  //       const pageCount = res.data.nbPages;
  //       setHits(hitList);
  //       setPageCount(pageCount);
  //       setisLoaded(true);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };
  const getComments = async () => {
    await axios
      .get(
        `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
      )
      .then((res) => {
        console.log(res.data);
        const hitList = res.data;
        console.log(res.headers["x-total-count"]);
        //lay du lieu tren header cua axios
        const totalCount = res.headers["x-total-count"];
        setPageCount(Math.ceil(totalCount / limit));
        setHits(hitList);
        setisLoaded(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const fetchCComments = async (currentPage) => {
    let data;
    const res = await axios
      .get(
        `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
      )
      .then((response) => {
        data = response.data;
      });
    console.log(data);
    return data;
  };

  const handlePageClick = async (data) => {
    console.log(data.selected);
    let currentPage = data.selected + 1;
    const commentsFromServer = await fetchCComments(currentPage);
    setHits(commentsFromServer);
  };

  useEffect(() => {
    setisLoaded(true);
    getComments();
  }, [limit]);

  // const handleFetch2 = () => {
  //   fetch(URL)
  //     .then((response) => response.json())
  //     .then((body) => {
  //       setHits([...body.hits]);
  //       setPageCount(body.nbPages);
  //       setisLoaded(true);
  //     })
  //     .catch((error) => console.error("Error", error));
  // };
  // const handlePageChange = (selectedObject) => {
  //   setcurrentPage(selectedObject.selected);
  //   handleFetch();
  // };

  return (
    <>
      <div>
        {/* <label>Search</label>
        <input type="text" onChange={(event) => setQuery(event.target.value)} />
        <button onClick={handleFetch}>Get Data</button> */}
        {isLoaded ? (
          hits.map((item) => {
            return (
              <NewsCard
                // url={item.name}
                // title={item.id}
                // author={item.body}
                // key={item.email}
                title={item.email}
                author={item.name}
                key={item.id}
              />
            );
          })
        ) : (
          <div></div>
        )}
        #New
        {isLoaded ? (
          <ReactPaginate
            previousLabel={"previous"}
            pageCount={pageCount}
            pageRange={2}
            marginPagesDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={"container"}
            previousLinkClassName={"page"}
            breakClassName={"page"}
            nextLinkClassName={"page"}
            pageClassName={"page"}
            disabledClassNae={"disabled"}
            activeClassName={"active"}
          />
        ) : (
          <div>Nothing to display</div>
        )}
      </div>
    </>
  );
};

export default RestApiPagination;
