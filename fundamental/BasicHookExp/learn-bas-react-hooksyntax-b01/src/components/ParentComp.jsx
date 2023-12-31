import React, { useContext } from 'react'
import ThemeContext from './store'

const ParentComp = ({value}) => {
    const {session, setSession} = useContext(ThemeContext);

  return (
    <div>
        Session on Parent Comp: {session.token}
    </div>
  )
}

export default ParentComp