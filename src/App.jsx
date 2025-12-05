import { Outlet } from 'react-router'
import './App.css'
import Admin from './Component/Admin'
import Nav from './Component/Nav'

function App() {
 

  return (
    <>
      <Nav></Nav>
      <div className='xl:flex mt-25 xl:mt-20 relative gap-x-5 justify-between w-full sm:w-11/12 mx-auto'>
        <div className='relative'>
          <Admin></Admin>
        </div>
        <div className='xl:w-[90%] '><Outlet></Outlet></div>
        
        
      </div>
     
    </>
  )
}

export default App
