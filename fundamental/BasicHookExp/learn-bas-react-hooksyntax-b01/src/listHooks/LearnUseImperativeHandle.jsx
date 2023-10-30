import React, { forwardRef, useImperativeHandle, useRef } from 'react'

// useImperativeHandle(ref, createHandle, [dependencies])



const LearnUseImperativeHandle = () => {
    //forwardRef
    const inputRef = useRef(null);


  return (
    <>
        <div>
            <Child onFocus={() => inputRef.current.focus()} ref={inputRef}></Child>
        </div>
    </>
  )
}

const Child = forwardRef((props, ref) => {
    const input = useRef();
    useImperativeHandle(ref, () => ({
        focus: () => console.log("Input is in focus")
    }));

    return (
        <>
            <input type="text" ref={input} {...props} placeholder='Type Here'/>
        </>
    )
})

export default LearnUseImperativeHandle