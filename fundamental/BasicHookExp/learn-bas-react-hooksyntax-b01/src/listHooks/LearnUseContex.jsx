import React from 'react'
import ParentComp from '../components/ParentComp'
import {createContext, useContext} from 'react';
import {ThemeProvider} from '../components/store';
import Home from '../components/Home';

const LearnUseContex = () => {
  return (
    <>
        <div className='App'>
            <ThemeProvider>
                <Home></Home>
            </ThemeProvider>
        </div>
    </>
  )
}

// function MyComp () {
//     const value = useContext(Context);

//     return (
//         <>
//             <div className=''>
//                 <span>
//                     {value}
//                 </span>
//             </div>
//         </>
//     )
// }

export default LearnUseContex