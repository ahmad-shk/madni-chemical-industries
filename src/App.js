import { useState } from 'react';
import './App.css';
import Layout from './theme/layout'
function App() {

  const [count,setCount]=useState(false)
  const click = () =>{
    setCount(!count);
  }
  
  return (
    <>
    <div className='px-12 py-6 bg-[#383838] '>
      <h1 className='text-white text-center text-[28px] font-bold'>CLICK TO CHANGE THEME</h1>
      <div className='flex flex-wrap gap-8 justify-center pt-6'>
   
    <button onClick={()=>click()} className='endure-btn border bg-[#c9c9c9] px-4 py-2 rounded-full'>Click</button>
   
    </div>
    </div>

   <Layout color={count? 'bg-white': 'bg-[#c9c9c9]'}/> 

    </>
  );
}

export default App;