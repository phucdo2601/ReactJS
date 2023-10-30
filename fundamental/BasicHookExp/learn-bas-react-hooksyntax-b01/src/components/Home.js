import React from 'react'
import {useContext} from 'react';
import ThemeContext from './store';
import ParentComp from './ParentComp';

const Home = () => {
    const {session, setSession} = useContext(ThemeContext);



    const handleClick = () => {
        console.log(session);
        setSession({
            ...session,
            token: 'New-token-value-generation'
        })
    }

  return (
    <>
        <div className=''>
            <p>Authorize Token: {session.token}</p>
            <button onClick={handleClick}>
                Click
            </button>
            <ParentComp />
        </div>
    </>
  )
}

export default Home