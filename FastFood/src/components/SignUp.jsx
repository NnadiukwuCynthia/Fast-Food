import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Code from "./Code";

const SignUp = () => {
    const [closeBtn, setCloseBtn] = useState(true);

    const handleClose = () => {
        setCloseBtn(prevCloseBtn => !prevCloseBtn);
    };
    
  return (
    <div className={`w-full h-screen bg-charcoal-black flex justify-center align-middle fixed inset-0 ${closeBtn ? '' : 'hidden'}`}>
        <div className="w-1/3 h-full my-20 bg-white rounded-2xl">
            <div className="flex justify-end pt-2 pr-2">
            <button className="border-none" onClick={handleClose}><IoClose className="text-2xl bg-text-grey text-white rounded-full"/></button>
            </div>
            <p className="text-4xl font-bold text-center pt-4">Welcome</p>
            <p className="text-sm text-center font-bold text-text-grey">Let us start with your phone number</p>
            <div className="flex align-buttom mt-10 w-full">
                <Code/>
                <div className="w-48 ml-5 countryList ">
                    <input type="text" placeholder="08....Phone Number" className="focus:outline-none" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp