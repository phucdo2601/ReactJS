import React, { useReducer } from 'react'

/**
 * useReducer()
 */

//intial state
const initialState = {
    count: 0
};



const LearnUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
        <div>
            Count: {state.count}
            {/* payload: mean the value argument from component or screen
                type: mean the definition of action is built up for excuting buss
            */}
            <button onClick={() =>dispatch({type: "increment", payload: 5})}>
                +
            </button>

            <button onClick={() =>dispatch({type: "descrement", payload: 3})}>
                -
            </button>
        </div>
    </>
  )
}

function reducer (state, action) {
    switch(action.type) {
        case 'increment': 
            return {
                count: state.count + action.payload
            }
        case 'descrement':
            return {
                count: state.count - action.payload,
            }
        default:
            throw new Error();
    }
}

export default LearnUseReducer