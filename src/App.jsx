import { useEffect, useState } from 'react'
import MainFrame from './components/MainFrame'
import Video from './components/Video'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MainFrame/>
      <Video/>
    </div>
  )
}

export default App
