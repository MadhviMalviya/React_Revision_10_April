

import React, { useState } from 'react'

function Table() {
    const [num, setNum] = useState(1)
    const Arr = []
    
    for (let i = 1; i <= 10; i++) {
        Arr.push(i * num)
    }

    function handleClick() {
        setNum(Math.floor(Math.random() * 100))
    }

    return (
        <div>
            <ul>{Arr.map((ele) => { return (<li>{ele}</li>) })}</ul>
            <button onClick={handleClick} >Table</button>
        </div>
    )
}

export default Table
