import { HiOutlineFlag } from "react-icons/hi";
import Image from "../assets/Images/map-Image.jpg"

const Location = () => {
  return (
    <div className="w-full h-screen bg-charcoal-black flex justify-center align-middle fixed inset-0 ">
            <div className="w-3/5 h-full my-20 bg-white rounded-2xl">
                <p className="text-center pt-10 font-bold text-3xl ">Add a Delivery Address </p>
                <div className="flex justify-evenly align-top  mt-10">
                    <div className="flex flex-col justify-between pt-7">
                        <form action="" className="flex justify-start">
                            <label htmlFor="location"><HiOutlineFlag/></label>
                            <input  type="text" id='location' className=" w-72 pb-4 border-b-2 focus:outline-none text-sm" placeholder="Search for streets, cities, districts..."/>
                        </form>
                    </div>
                    <div>
                        <img src={Image} alt="" />
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Location