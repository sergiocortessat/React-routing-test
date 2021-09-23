import React, { useEffect, useState } from 'react';

const Index = ({test}, props) => {
    const [temp, setTemp] = useState()
useEffect(() => {

    setTemp(test.results);
}, [])
    return (
        <div>
     {temp && temp.map((item) => (
        <div>
            <h1>{item.name}</h1>
            <h2>{item.url}</h2>
        
        </div>
    ))}

        </div>
    )
}

export default Index;