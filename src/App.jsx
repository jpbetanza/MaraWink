import { useEffect, useState } from 'react'
import MainFrame from './components/MainFrame'
import Video from './components/Video'

function App() {
  const [init, setInit] = useState(false)

  return (

    <div>
      <MainFrame/>
      <Video/>
    </div>
  )
}

export default App
