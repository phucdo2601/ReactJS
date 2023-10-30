import React, { useEffect, useLayoutEffect, useState } from 'react'

/**
 * useLayoutEffect: The useLayoutEffect function is triggered synchronously before the DOM mutations are painted. However, the useEffect function is called after the DOM mutations are painted.
 * => The display speed of useLayoutEffect will more fastly than useEffect
 * @returns 
 */
const LearnUseLayoutEffect = () => {

    const [name, setName] = useState("Daily")

    useEffect(() => {
      //do sth
      console.log(`useEffect() trigger`);
    },[name])

    useLayoutEffect(() => {
      //do sth
      console.log(`useLayoutEffect() trigger`);
      if (name === "Daily") {
        setName("NameWithGeneratingVal")
      }

    }, [name])
    

  return (
    <div>
        <input type="text" value={name} name='name' onChange={(e) => setName(e.target.value)}/>
        <button onClick={() => setName('tuition')}>
            State Update
        </button>
    </div>
  )
}

export default LearnUseLayoutEffect