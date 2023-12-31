import React, { useEffect, useState } from 'react'

const LearnUseEffect = () => {
    // const [comment, setComment] = useState("Hi There How are you?");
    // const [comment_two, setComment_two] = useState("This is the common test-b02!");
    const [comment, setComment] = useState(true);


    useEffect(() => {
      console.log("trigger use effect hook");

      return () => {
        console.log('Unmount');
      }
    })
    
    // const commentHandler = () => {
    //     setComment("Hi Im Fine");
    // }

    // const commentTwoHandlerChange = () => {
    //     setComment_two("Test-change-common-02");
    // }

    const commentHandler = () => {
        setComment(!comment);
    }
  
    return (
    <>
        {/* <div>
            <h1>{comment}</h1>
            <h1>{comment_two}</h1>
            <button type='button' onClick={commentHandler}>Reply</button>
            <button type='button' onClick={commentTwoHandlerChange}>Reply Common 2</button>
        </div> */}
        <div>
            <h1>{comment? <>
                <div>Remove me</div>
            </> : <>
                Notthing....
            </>}</h1>
            <button type='button' onClick={commentHandler}>Reply Common 2</button>
        </div>
    </>
  )
}

export default LearnUseEffect