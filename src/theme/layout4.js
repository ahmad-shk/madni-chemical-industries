import DescriptionBox from '../Components1/DescriptionBox';
import UsageBoxes from '../Components1/UsageBoxes';
import '../App.css';
import { useEffect, useState } from 'react';
function Layout4() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen); // toggle menu on click
  };

  const handleOutsideClick = (e) => {
    // If the click is outside the menu, close it
    if (!e.target.closest('.nav')) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener to detect clicks outside the menu
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="body bg-[white] text-black">
      <div className="cont">
        {/* Navbar */}
        <div className="navbar p-6">
          <div className="nav flex justify-between items-center">
          <button className="logo flex justify-center items-center border-2 border-[#9e9e9e]"><img src="./logo.jpeg" alt="Logo" /></button>
            <div className="relative text-[black]">
              <button onClick={handleMenuClick} className="list h-[20px] w-[20px]">
                <img src="./bars.svg" className="h-full w-full" alt="Menu" />
              </button>
              {isMenuOpen && (
                <ul className="absolute p-[3px] bg-[#c9c9c9] right-[20%] [&>*]:py-2 [&>*]:px-12 [&>*]:cursor-pointer hover:[&>*]:bg-[#0d67a5] [&>*]:font-semibold rounded">
                  <li onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>About<span className="pl-1">us</span></li>
                  <li onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>FAQs</li>
                  <li onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>Contact</li>
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* //////////////////////////////////////////////////////////////////////////// */}
        <div className='text-center pt-12 pb-6 text-[24px] text-[#000] font-bold'><h1>FEATURED PRODUCT</h1></div>
        <div className='pt-24 pb-2 max-w-[95%] min-w-[300px] m-auto grid grid-cols-[repeat(auto-fit,minmax(300px,45%))] justify-center gap-6 rounded-t-xl -bg-[#ececec] bg-[#c9c9c9] px-6'>
          <div>
            <div className='border border-[#c9c9c9] flex justify-center items-center relative bottle-cont rounded-lg'><img src='./posterLogo.jpeg' className='absolute h-full w-full bottle-bg'/><img src='./bottle.svg' className='bottle'/></div>
            <h1 className='text-center text-[16px] font-semibold py-6 name'>Catagaurd Converter Cleaner</h1>
            <div className='text-center text-[#ffffff] border p-3 bg-[#0d67a5] border-[#c9c9c9] rounded-lg'><label><strong>Why use it?</strong></label><h3>Over time, carbon deposits and other contaminants can build up in the exhaust system, affecting the converter's ability to reduce harmful emissions. <strong>Catagaurd catalytic converter cleaner</strong> works by breaking down these deposits and cleaning the exhaust passageways, allowing for improved airflow and optimal converter performance. This specialized formula is designed to help maintain and restore the efficiency of a vehicle's catalytic converter.</h3></div>
            <img src='./bgImage1.png' className='mt-4 rounded-lg descriptionBox'/>
          </div>

          <div className='flex flex-col justify-between'>
            <DescriptionBox label={'QUICK CLEAN'} description={'Quickly cleans the harmful chemicals such as: Sulphur, Carbon Phosphorus from the surface of catalytic converter'}/>
            <DescriptionBox label={'RECOVERING'} description={'Recovers the activity of catalytic converter'}/>
            <DescriptionBox label={'EMISSION'} description={'Reduces the vehicles harmful emission'}/>
            <DescriptionBox label={'POWER'} description={'Reduces the fuel consumption and increases power'}/>
            <DescriptionBox label={'CATALYTIC LIFE'} description={'Enhances the tendency of catalytic life'}/>
            <img src='./bgImage2.png' className=' rounded-lg descriptionBox'/>
          </div>
        </div>


        <div className=' max-w-[70%] min-w-[300px] m-auto py-6 flex flex-col gap-1'>
             <UsageBoxes label={1} usage={'Shake well before use'}/>
             <UsageBoxes label={2} usage={'Pour the chemical in the catalytic converter placed in the silencer'}/>
             <UsageBoxes label={3} usage={'Wait for 5 tp 7 minutes'}/>
             <UsageBoxes label={4} usage={'wash it with high pressure water'}/>
             <UsageBoxes label={5} usage={'Fix silencer and gradually increase the acceletor to 2000 RPM for 2 to 3 minutes'}/>
        </div>
        {/* ///////////////////////////////////////////////////////////////////////////////// */}
        <div className='footer pt-[3px] text-white'>
          <div className='footer-cont p-[10%] py-8 bg-[#343434] grid gap-8 justify-center items-center grid-cols-1 md:grid-cols-[repeat(3,1fr)]'>
            <div className='foot-section1 w-full -bg-red-50 flex flex-col justify-center items-center gap-4'>
            <button className="logo flex justify-center items-center border-2 border-[#9e9e9e]"><img src="./logo.jpeg" alt="Logo" /></button>
            <label>MADNI CHEMICAL INDUSTRIES</label>
            </div>
            <div className='foot-section2 foot-section2 [&>*]:py-2 [&>*]:flex [&>*]:gap-2 [&>*]:justify-center '>
              <div className=''>
                <img src='./phone.svg' className='w-[15px]' /><label>+92 00000 0000000</label>
              </div>
              <div className=''>
                <img src='./envelope.svg' className='w-[15px]' /><label>madinaIndustries@gmail.com</label>
              </div>
              <div className=''>
                <img src='./location.svg' className='w-[15px]' /><label>Kasur industries</label>
              </div>
            </div>
            <div className='foot-section3 flex flex-col items-center'>
              <h4 className='font-medium'>About Company</h4>
              <h6 className='text-[13px] text-center'>Madina Chemical Industries Situated In Kasur is the best chemical industry in pakistan</h6>
              <div className='flex justify-between pt-3 w-[260px] [&>*]:w-[30px]'>
                <img src='./instagram.svg' />
                <img src='./facebook.svg' />
                <img src='./twitter.svg' />
                <img src='./tiktok.svg' />
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Layout4;