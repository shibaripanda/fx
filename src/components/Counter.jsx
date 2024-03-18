import React, { useState } from "react"

export const Counter = () => {
    const [count, setCount] = useState(0)

    function inc() {
        setCount(count + 1)
      }
      function dcr() {
        setCount(count - 1)
      } 

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={inc}>Inc</button>
            <button onClick={dcr}>Dec</button>
        </div>
    )
}