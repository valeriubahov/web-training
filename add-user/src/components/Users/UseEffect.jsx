import { useState } from "react"

const UseEffect = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}> {count}</button>
    </>
  )
}

export default UseEffect
