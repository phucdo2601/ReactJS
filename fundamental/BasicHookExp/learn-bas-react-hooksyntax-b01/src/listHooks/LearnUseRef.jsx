import React, { useEffect, useRef } from 'react'

const LearnUseRef = () => {
    // const countRef = useRef();

    // const handleChangeVal = () => {
    //     // countRef.current++;
    //     console.log(`Clicked ${++countRef.current}`);
    // }

    useEffect(() => {
      console.log(inputRef.current);
    }, [])
    

    const inputRef = useRef();
    const handleChangeVal = () => {
        inputRef.current.focus();
    }

  return (
    <>
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={handleChangeVal}>
                Click me
            </button>
        </div>
    </>
  )
}

export default LearnUseRef