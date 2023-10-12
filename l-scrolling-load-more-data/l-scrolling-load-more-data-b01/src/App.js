import { useCallback, useRef, useState } from "react";
import useBookSearch from "./hooks/useBookSearch";

function App() {

  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const {
    books,
    error,
    loading,
    hasMore
  } = useBookSearch(query, pageNumber);

  const observer = useRef();

  /**
   * This func handle the load more action 
   * for scrolling to the excatly position will be set for call on ui
   */
  const lastBookElementRef = useCallback((node) => {
    if (loading) {
      return
    }

    if (observer.current) {
      observer.current.disconnect();
    }

    // 
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        console.log('Visible');
        setPageNumber(prevPageNumber => prevPageNumber + 1);
      }
    })

    if (node) {
      observer.current.observe(node)
    }
    console.log(node);
  }, [loading, hasMore])

  const handleSearch = (e) => {
    setQuery(e.target.value);

    setPageNumber(1);
  }

  
  return (
    <>
      <input type="text" value={query} onChange={handleSearch}/>
      {
        books.map((book, index) => {
          /**
           * Catch the status of sitting of index in the point which plus one 
           * can equal to the length of previous set data => they can call lastBookElementRef func 
           * for calling again api and approve tha data on the previous list.
           */
          // if (books.length === index + 1) {
          //   return (
          //     <>
          //       <div ref={lastBookElementRef} key={book}>
          //         {book}
          //       </div>
          //     </>
          //   )
          // } 

          /**
           * In this case, I will choose plus 20 el before equaling the length of previous data list
           * (Because of the slow fetching time, I want to change plus number. If guest scroll the current list to the 80 position (100 - 20), 
           * the lastBookElementRef func will be called for fetching the data of the next page and pushing on the current list for many data include the current.
           * 
           * )
           */
          if (books.length === index + 20) {
            return (
              <>
                <div ref={lastBookElementRef} key={book}>
                  {book}
                </div>
              </>
            )
          } 
          
          else {
            return (
              <>
                <div key={book}>
                  {book}
                </div>
              </>
            )
          }
        })
      }
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error...'}</div>
    </>
  );
}

export default App;
