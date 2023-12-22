
import { useState, useEffect, useRef } from "react";

function App() {
  const [name, setName] = useState('')
  // const renderCount = useRef(1) //useRef returns only one single value. It returns an object {current: 0}
  const prevName = useRef('')

  useEffect(() => {
    prevName.current = name
  }, [name])

  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)} />
      <div>My name is {name} and it used to be {prevName.current}</div>
    </>
  );
}

export default App;
