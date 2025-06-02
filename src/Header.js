import React, { useState } from 'react'

export const Header = () => {
    let a=10,rollNo=47,name="Anushruti Mahato",studentId=249001001147,branch="Computer Science and Engineering",
    college="Chaibasa Engineeering College",year="2nd Year";
    
    const[count,setCount]=useState(10);
    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)
    }
  return (
    <div>
        <h2>Counting Operator</h2>
        <p>Value of a count:{count}</p>
        <p><button onClick={increment}>Increment by 1</button></p>
        <p><button onClick={decrement}>Decrement by 1</button></p>

        <h2>Student Details</h2>
        <p>Roll No:{rollNo}</p>  
        <p>Name:{name}</p>   
        <p>Year:{year}</p>   
        <p>Student ID:{studentId}</p> 
        <p>Branch:{branch}</p>  
        <p>College:{college}</p>    
    </div>
  )
}
