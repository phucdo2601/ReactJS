import React, { useCallback, useState } from 'react'

const functionCounter = new Set();

const LeanUseCallback = () => {
    const [count, setCount] = useState(0);

    const [otherCounter, setOtherCounter] = useState(0)

    const incrementFunc = () => {
        setCount(count + 1);
    }

    const decrementFunc = () => {
        setCount(count - 1);
    }

    const incrementOtherCounter = () => {
        setOtherCounter(otherCounter + 1);
    }

    // functionCounter.add(incrementFunc)
    // functionCounter.add(decrementFunc)
    // functionCounter.add(incrementOtherCounter)

    

    //useCallback func
    const incrementCallbackFunc = useCallback(() => {
        setCount(count + 1);
    }, [count])

    const decrementCallbackFunc = useCallback(() => {
        setCount(count - 1);
    }, [count])

    const incrementOtherCallbackFunc = useCallback(() => {
        setOtherCounter(otherCounter + 1);
    }, [otherCounter])

    functionCounter.add(incrementCallbackFunc)
    functionCounter.add(decrementCallbackFunc)
    functionCounter.add(incrementOtherCallbackFunc)

    console.log(functionCounter.size);
  return (
    <>
        <div>
            <div>
                Count: {count}
                OtherCount: {otherCounter}
            </div>
            
            <button onClick={incrementCallbackFunc}>
                +
            </button>

            <button onClick={decrementCallbackFunc}>
                -
            </button>

            <button onClick={incrementOtherCallbackFunc}>
                IncrementWithOtherState
            </button>
        </div>
    </>
  )
}

export default LeanUseCallback