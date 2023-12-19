import { useEffect, useState } from 'react'
import MainFrame from './components/MainFrame'



function App() {
  const [count, setCount] = useState(0)



  return (
    <div>
      <MainFrame/>
    </div>
  )
}

export default App
