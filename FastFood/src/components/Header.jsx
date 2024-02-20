import Image from '../assets/Images/Logo-Image.png'

const Header = () => {
  return (
    <header className="bg-light-blue py-3.5 w-full h-10">
        <div className="w-full h-10">
        <div className="w-14 h-14">
            <p>FastFood</p>
            <img className="h-2 w-2" src={Image} alt="" />
        </div>
        </div>
    </header>
    
    
  )
}

export default Header 