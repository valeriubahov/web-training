import { createContext, useContext, useState } from "react"

const ContextTest = createContext(undefined)

const MyContext = ({ children }) => {
  const [count, setCount] = useState(0)

  return (
    <ContextTest.Provider value={{count, setCount}}>
      {children}
    </ContextTest.Provider>
  )
}

export const useMyContext = () => {
  const test = useContext(ContextTest)
  return test
}

export default MyContext
