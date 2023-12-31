import React, { createContext, useState } from 'react'

export const initialState ={
  session: {
    token: 'inital-secret-token',
    username: "Phuc Do Ngoc"
  },
  getToken: () => initialState.session.token,
}

const ThemeContext = createContext(initialState);

export const ThemeProvider = ({children}) => {
    const [session, setSession] = useState(initialState.session)

    return (
        <>
            <ThemeContext.Provider value={{session, setSession}}>
                {children}
            </ThemeContext.Provider>
        </>
    )
}

export default ThemeContext;