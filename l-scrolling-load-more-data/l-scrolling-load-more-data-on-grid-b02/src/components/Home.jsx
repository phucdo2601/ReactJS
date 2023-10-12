import { useEffect, useState } from 'react'
import MovieComponent from './MovieComponent';
import Loading from './Loading';

const Home = () => {
    const [card, setCard] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    const getCardData = async () => {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`
        );

        const data = await res.json();
        console.log(data);
        setCard((prev) => [...prev, ...data]);
        setLoading(false);
    }

    useEffect(() => {
        getCardData()
    }, [page])

    /**
     *  This function for set new page number for calling api by the scrooling gesture
     * Get scrollHeight, innerHeight, scrollTop for setting condition load more
     * In this case, I plus 1 for innerHeight + scrollTop beacause of fetching data when app is seen the sum of innerHeight and scrollTop + 1 is nearly with the scrollHeight (the previous fetching data before scroll point sit on the pos which have the height is same as the scrollHeight) 
     * Note: if you want to load data more smoothly, you can increase the plussing variable for another case(network speed, smooth) 
     */
    const handleInfiniteScroll = async () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const innerHeight = window.innerHeight;
        const scrollTop = document.documentElement.scrollTop;
        const increaseHeight = 1;

        console.log("scrollHeight" +scrollHeight);
        console.log("innerHeight" +innerHeight);
        console.log("scrollTop" +scrollTop);
        try {
            if (innerHeight + scrollTop + increaseHeight >= scrollHeight) {
                setLoading(true);
                setPage((prev) => prev + 1)
            }
        } catch (error) {
            console.log(error);
        }
    }

    
    /**
     * Add event listener for scrolling to execute load more data
     * After exectuing done, we remove this action because of avoiding excuting unlimitted
     */
    useEffect(() => {
        window.addEventListener('scroll', handleInfiniteScroll);
        return () => window.removeEventListener("scroll", handleInfiniteScroll)
    }, [])

  return (
    <>
       <MovieComponent movieInfo={card}/>
       {
        loading && (
            <>
                <Loading />
            </>
        )
       }
    </>
  )
}

export default Home