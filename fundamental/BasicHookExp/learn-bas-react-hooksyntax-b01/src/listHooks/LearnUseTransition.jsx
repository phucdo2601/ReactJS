import React, { useEffect, useState, useTransition } from 'react';
import data from '../mockData/listMockData.json';

// const largeList = [
//     {
//         id: 1,
//         product: "hand mixer",
//     },
//     {
//         id: 2,
//         product: "Furniture",
//     },
// ]

const largeList = data.candidate;

const LearnUseTransition = () => {
    const [isPending, startTransition] = useTransition();
    // const [count, setCount] = useState(0);
    const [list, setList] = useState(largeList)
    const [name, setName] = useState("")

    // useEffect(() => {
    //     console.log(`useState triggered`);
    // }, [])

    console.log(data);

    console.log(isPending);


    const handleChangeField = (e) => {
        setName(e.target.value)
        startTransition(() => {
            console.log(isPending);
            setList(list.filter((item) => item.fullName.toLowerCase().includes(e.target.value)))
        })
    }

  return (
    <>
        <div>
            <input type="text" value={name} onChange={handleChangeField}/>

            {
                isPending ? (
                    <>
                        <div>
                            Loading...
                        </div>
                    </>
                ) : (
                    <>
                        {
                            list.map((item) => (
                                <>
                                    <div key={item.candidateId}>
                                        {item.fullName}
                                    </div>
                                </>
                            ))
                        }
                    </>
                )
            }
        </div>
    </>
  )
}

export default LearnUseTransition