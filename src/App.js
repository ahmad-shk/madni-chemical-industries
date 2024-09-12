import { useState } from 'react';
import './App.css';
import Layout1 from './theme/layout1'
import Layout2 from './theme/layout2'
import Layout3 from './theme/layout3'
import Layout4 from './theme/layout4';
function App() {
  const [count,setCount]=useState(1)
  return (
    <>
    <div className='px-12 py-6 bg-[#383838] '>
      <h1 className='text-white text-center text-[28px] font-bold'>CLICK TO CHANGE THEME</h1>
      <div className='flex flex-wrap gap-8 justify-center pt-6'>
    <button onClick={()=>{setCount(1)}} className='endure-btn border bg-white px-4 py-2 rounded-full'>Layout 1</button>
    <button onClick={()=>{setCount(2)}} className='endure-btn border bg-white px-4 py-2 rounded-full'>Layout 2</button>
    <button onClick={()=>{setCount(3)}} className='endure-btn border bg-white px-4 py-2 rounded-full'>Layout 3</button>
    <button onClick={()=>{setCount(4)}} className='endure-btn border bg-white px-4 py-2 rounded-full'>Layout 4</button>
    </div>
    </div>
    {count===1&&<Layout1/> }
    {count===2&&<Layout2/> }
    {count===3&&<Layout3/> }
    {count===4&&<Layout4/> }
    </>
  );
}

export default App;