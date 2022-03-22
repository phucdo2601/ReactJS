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
const useCovidFetch = (url, isCoviddata) => {
  const [data, setData] = useState([]);

  //dat bien chi trang thai isLoading
  const [isLoading, setIsLoading] = useState(true);

  //dat bien chi error message
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const ourRequest = axios.CancelToken.source(); // <-- 1st step

    async function fetchData() {
      /**
       * dung try catch trong ham cua fetchData thi axios moi hieu
       */
      try {
        // You can await here
        let res = await axios.get(url, {
          cancelToken: ourRequest.token,
        });

        let data = res && res.data ? res.data : [];

        if (data && data.length > 0 && isCoviddata === true) {
          data.map((item) => {
            item.Date = moment(item.Date).format("DD/MM/YYYY");
          });

          data = data.reverse();
        }
        console.log(">>> check set data: ", data);
        setData(data);
        setIsLoading(false);
        setIsError(false);
      } catch (error) {
        /**
         * Ham check cancel request
         * Truong hop cancel thi chung ta se chay ham cancel axios
         * Nguoc lai thi chung ta se tiep tuc chay cac chung nang loading va bat error
         */
        if (axios.isCancel(error)) {
          console.log("Request canceled", error.message);
        } else {
          //khi co loi setIsError bang true
          setIsError(true);
          //khi khong load dc du lieu thi phai set isLoading === false de khong hien thi thong bao loading
          setIsLoading(false);

          // console.log("e >> check error: ", error);
          // console.log(">>>error name: ", error.name);
          // console.log(">>>error message:" + error.message);
        }
      }
    }

    setTimeout(() => {
      fetchData();
    }, 5000);

    /**
     * Neu chu tab nhanh cac tab ma chua load du lieu, thi chung ta cancel request axios de tranh ganh nang len server
     */
    return () => {
      ourRequest.cancel("Operation canceled by the user.");
    };
  }, [url]);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useCovidFetch;
