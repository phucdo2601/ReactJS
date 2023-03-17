import React from 'react'

const StudentListComponent = (props) => {
  return (
    <>
        <div>
            Student List
        </div>
        
        <div>
        {
            props.data.map((student) => (
                <>
                    <p>{student}</p>
                </>
            ))
        }

        </div>
    </>
  )
}

export default StudentListComponent