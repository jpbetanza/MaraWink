import { useState } from 'react'
import MainFrame from './components/MainFrame'
import Video from './components/Video'
import Init from './components/Init'

function App() {
  const [init, setInit] = useState(true)

  return (
    <div className='flex flex-col justify-center bg-black'>
      <div className='flex gap-3 flex-col justify-center items-center h-screen bg-white bg-opacity-20'>
        <Video hide={!init}/>
      {init?(<Init onclick={()=>setInit(false)}/>):(<MainFrame/>)}
      </div>
      
    </div>
  )
}

export default App
