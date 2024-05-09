import React, { useEffect, useState } from 'react'

function Assignment() {
    const [result,setResult] = useState([])
    const [page,setpage] = useState(1)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch('https://jsonplaceholder.typicode.com/posts')
                .then(res => res.json())
                .then(result => setResult(result) )
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    },[])
    const handleprev = () => {
        if(page===1){
            return 
        }
        else{
            setpage(page - 1)
        }
    }
    const handleNext = () => {
        if(result.length/page <= page){

        }
        else{

            setpage(page + 1)
        }
    }
  return (
    <div>
        <h1>Table </h1>
        <table>
            <tbody>
                {
                    result.slice(page*10 - 10,page*10).map((item,i) => {
                        return(
                            <tr key={i}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.title}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
            <button onClick={() => handleprev()}>
                Prev
            </button>
            <button onClick={() => handleNext()}>
                Next
            </button>
        </table>
    </div>
  )
}

export default Assignment