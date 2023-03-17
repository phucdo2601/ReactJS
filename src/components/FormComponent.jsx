import React, { useDeferredValue, useId, useMemo, useState, useTransition } from 'react'
import StudentListComponent from './StudentListComponent';
import studentListData from '../mocks/studentList.json';

const FormComponent = () => {

    /**
     * Reasearch new hooks in React 18
     */

    //useId() -- support for focus on the excatly component
    /**
     * for generating unique IDs on both the client and server, while avoiding hydration mismatches
     */

    const id = useId();
    console.log({ id });

    const [searchInput, setSearchInput] = useState('');

    //tao ra filter state
    // const [filterText, setFilterText] = useState('');

    /**
     * su du transition thong qua useTransition
     * isPending: cho biet hien tai co mot tien trinh nao dang dc can theip boi react hook hay ko
     */
    // const [isPending, startTransition] = useTransition();

    /**
     * useDeferredValue
     */
    const deferedValue = useDeferredValue(searchInput);



    // const data = studentListData;

    /**
     * Mo ta van de truoc react 18
     */
    //su dung filter text
    // const data = useMemo(() => {
    //     return studentListData.map((student) => {
    //         const index = student.indexOf(searchInput);
    //         return index === -1 ? <p>{student}</p> : <p>

    //             {student.slice(0, index)}
    //             <span style={{ background: 'yellow' }}>
    //                 {
    //                     student.slice(index, index + searchInput.length)

    //                 }

    //             </span>
    //             {student.slice(index + searchInput.length)}

    //         </p>
    //     })
    // }, [filterText]);

    //su dung useDefaultValue 
    const data = useMemo(() => {
        return studentListData.map((student) => {
            const index = student.indexOf(deferedValue);
            return index === -1 ? <p>{student}</p> : <p>

                {student.slice(0, index)}
                <span style={{ background: 'yellow' }}>
                    {
                        student.slice(index, index + deferedValue.length)

                    }

                </span>
                {student.slice(index + deferedValue.length)}

            </p>
        })
    }, [deferedValue]);


    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);

        //giup ko bi delay -- cai thien performance
        // startTransition(() => {
        //     setFilterText(e.target.value);
        // })

    }


    return (
        <>
            <h3>Form</h3>
            <label htmlFor={id}>Search Name:</label>
            <input type="text" name='name' value={searchInput} id={id} onChange={(e) => handleSearchInputChange(e)} />

            {/* {
                isPending ? <p>Loading...</p> :
                    <StudentListComponent data={data} />

            } */}

            <StudentListComponent data={data} />
        </>
    )
}

export default FormComponent