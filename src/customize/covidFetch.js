/**
 * muon tao mot custom hook thi ten function phai bat dau bang chu use (rule cua reactjs-hook)
 */

import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
/**
 * Tach mot useEfect ra lam mot ham rieng de tai su o cac component khac
 * Ham nay no tra ve data
 */
const useCovidFetch = (url) => {
  const [data, setData] = useState([]);

  //dat bien chi trang thai isLoading
  const [isLoading, setIsLoading] = useState(true);

  //dat bien chi error message
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        async function fetchData() {
          // You can await here
          let res = await axios.get(url);

          let data = res && res.data ? res.data : [];

          if (data && data.length > 0) {
            data.map((item) => {
              item.Date = moment(item.Date).format("DD/MM/YYYY");
            });

            data = data.reverse();
          }
          console.log(">>> check set data: ", data);
          setData(data);
          setIsLoading(false);
          setIsError(false);
        }
        fetchData();
      } catch (error) {
        // alert(error.message);

        //khi co loi setIsError bang true
        setIsError(true);
        //khi khong load dc du lieu thi phai set isLoading === false de khong hien thi thong bao loading
        setIsLoading(false);

        // console.log("e >> check error: ", error);
        // console.log(">>>error name: ", error.name);
        // console.log(">>>error message:" + error.message);
      }
    }, 5000);
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useCovidFetch;
