import React, { useEffect, useMemo, useState } from 'react'

/**
 * nó thực ra cũng là một hàm, mà hàm này có tác dụng là giúp performance của app được tốt lên. 
 * Có 2 tham số đó là function và một list dependencies, nó sẽ memorizes value output của một function và chỉ recomputed memoried value này khi mà một trong các dependencies thay đổi.
 * Nói cách khác thì useMemo sẽ lưu giá trị trả về của function và nó sẽ kiểm tra xem phụ thuộc thay đổi thì nó 
 * mới chạy hàm phía trong, còn không thì sẽ trả về value đã cached trước đó. Mình thêm một ví dụ cho dể hiểu nhé.
 * @returns 
 */
// useMemo

const LearnUseMemo = () => {
    const [counter, setCounter] = useState(0)
    const [otherCounter, setOtherCounter] = useState(0)

    useEffect(() => {
        console.log(`Parent Rendered`);
    })

    const memoized = useMemo(() => {
        return <Child></Child>
    }, [otherCounter])
    
  return (
    <>
        <div>
            {/* <Child></Child> */}
            {memoized}
            <button onClick={() => setCounter(counter + 1)}>
                Click Me! You clicked {counter} times
            </button>

            <button onClick={() => setOtherCounter(otherCounter + 1)}>
                Click Me! You clicked {counter} times of otherCounter button
            </button>
        </div>
    </>
  )
}

const Child = () => {
    useEffect(() => {
        console.log(`Child rendered`);
    })
}

export default LearnUseMemo