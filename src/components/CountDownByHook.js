import { useEffect, useState } from "react";

const CountDownByHook = (props) => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count === 0) {
      props.onTimeUpOfHook();
      return;
    }

    let timer = setInterval(() => {
      console.log(">>run me hook");
      setCount(count - 1);
    }, 1000);

    /**
     * moi mot lap ham useEffect nay chay thi chung ta can xoa cai ham timer di
     * dat bien count trong dependency de no chay lien tuc
     */
    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return (
    <>
      <div>{count} hooks</div>
    </>
  );
};

export default CountDownByHook;
