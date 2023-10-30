import React, { useState } from 'react'

const LearnUseStateHook = () => {
    const [name, setName] = useState({
        firstName: 'Phuc',
        lastName: "Last-Original"
      });
    
      const onClickChangeName = (e) => {
        e.preventDefault();
        console.log(name);
      }
    
      return (
        <>
          <div className='App'>
            Hello World from {name.lastName} - {name.firstName}
    
        <form>
        <input type="text" value={name.firstName} 
          name='firstName'
          onChange={(e=> setName({
            ...name,
            [e.target.name]: e.target.value
          }))}
          placeholder='Your first name'
        />
          <p>{name.firstName}</p>
            <button onClick={onClickChangeName}>
              Click me
            </button>
    
            </form>
          </div>
        </>
      )
}

export default LearnUseStateHook