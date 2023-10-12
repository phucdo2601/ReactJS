import axios from 'axios';
import React, {useEffect, useState} from 'react'

const useBookSearch = (query, pageNumber) => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [books, setBooks] = useState([]);
    const [hasMore, setHasMore] = useState(false);

    /**
     * The purpose of this useEffect for 
     * clear a data list when user delete on element 
     * After that the fetching data will be worked at the second useEffect
     */
    useEffect(() => {
        console.log(`Set empty list!`);
        setBooks([])
    }, [query])

    /**
     * The main block solve the main bussness logic for load data for the api
     */
    useEffect(() => {
        console.log(`------------Begin Fetching data----------`);

        setLoading(true);
        setError(false);
        let cancel;

      axios({
        method: 'GET',
        url: 'http://openlibrary.org/search.json',
        params: {
            q: query,
            page: pageNumber
        },
        cancelToken: new axios.CancelToken(c => cancel = c)
      }).then((res) => {
        console.log(res.data);
        setBooks((prevBooks) => {
            return [...new Set([...prevBooks, ...res.data.docs.map(b => b.title)])];
        })

        setHasMore(res.data.docs.length > 0);
        setLoading(false)
      }).catch((e) => {
        if (axios.isCancel(e)) {
            return
        }
        setError(true)
      });

      return () => cancel();
    }, [query, pageNumber])
    

  return {
    loading,
    error,
    books,
    hasMore
  };
}

export default useBookSearch