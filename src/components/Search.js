import React, { useState } from 'react';

const Search = () => {
    const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"]
   const [input,setInput] = useState('')
   const[show,setShow] = useState('')

 const filterdValue= fruits.filter((item)=>
  item.toLowerCase().includes(input.toLowerCase())
)
  return (
    <div>
      <h1>Search item</h1>
      <input type = "text"  value={input} onChange={(e)=>
        setInput(e.target.value)} />
 <ul>
      {filterdValue.map((item,index)=>(
      <li key={index}>{item}</li> 
      ))}
      </ul>
    </div>
  );
}

export default Search;
