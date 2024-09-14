import { useState } from 'react';
import './App.css';
import Layout from './theme/layout'
function App() {

  // const [count,setCount]=useState(1)
  // const bgColors = ['bg-white', 'bg-[#c9c9c9]', 'bg-[#252525]', 'bg-[#0d67a5]'];
  // const fgColor = ['bg-[#0d67a5]', 'bg-[#0d67a5]', 'bg-[#343434]' ,'bg-[#c9c9c9]']

  // const handleClick = () => {
  //   setCount((prevCount) => prevCount + 1);
  // };

  return (
    <>
    {/* <div className='px-12 py-6 bg-[#383838] '>
      <h1 className='text-white text-center text-[28px] font-bold'>CLICK TO CHANGE THEME</h1>
      <div className='flex flex-wrap gap-8 justify-center pt-6'>
   
    <button onClick={()=>handleClick()} className='endure-btn border bg-[#c9c9c9] px-4 py-2 rounded-full'>Click</button>
   
    </div>
    </div> */}
 
   <Layout /> 

    </>
  );
}

export default App;