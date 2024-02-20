import { useState } from 'react';
import Image from '../assets/Images/Logo-Image.png'
import Location from './Location'


const Header = () => {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(true);
  };

  return (
    <header className="bg-emerald-green py-3.5 fixed w-full">
        <div className="h-20 flex pt-3">
        <div className="flex justify-center px-16">
            <p className='text-brown text-3xl pt-2 font-semibold'>FastFood</p>
            <img className="h-7 w-12" src={Image} alt="" />
        </div>
        <div className="w-3/5 flex justify-between align-middle pl-20 relative ml-20">
          <input type="search" className='searchInput w-3/5 h-12 text-xl px-24 rounded-3xl focus:outline-none' placeholder='Search'/>
          <button className='bg-brown px-6 h-12 text-base rounded-full text-white font-semibold' onClick={handleClick}>Get started</button>
          {showComponent && <Location />}
        </div>
        </div>
    </header>
    
    
  )
}

export default Header 