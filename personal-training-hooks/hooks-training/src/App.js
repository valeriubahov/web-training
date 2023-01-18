import { useContext, useRef } from "react"
import "./App.css"
import { useMyContext } from "./components/context/MyContext"

function App() {
  const { count, setCount } = useMyContext()

  const nameRef = useRef(null)
  const surnameRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (nameRef.current.value && surnameRef.current.value) {
      setCount((prev) => {
        return prev + 1
      })
    }
  }

  return (
    <div className="App">
      <section className="section">
        <form onSubmit={handleSubmit} className="form-test">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" ref={nameRef} />
          <label htmlFor="surname">Surname</label>
          <input type="text" name="surname" ref={surnameRef} />
          <button type="submit">Send</button>
          <p>{count}</p>
        </form>
      </section>
      <section className="section">
        <p>section 2</p>
      </section>
    </div>
  )
}

export default App
