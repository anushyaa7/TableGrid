import { useState } from 'react'
import './App.css'
import CustomizedTable from './CustomizedTable'
import EditableTable from './EditableTable'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <EditableTable/>
    </>
  )
}

export default App
