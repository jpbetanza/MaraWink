import { useEffect, useState } from 'react'
import MainFrame from './components/MainFrame'
import Video from './components/Video'
import Init from './components/Init'

function App() {
  const [init, setInit] = useState(false)

  return (
    <div>
      <Video/>
      <MainFrame/>
      {/* {init?(<Init/>):(<MainFrame/>)} */}
    </div>
  )
}

export default App
