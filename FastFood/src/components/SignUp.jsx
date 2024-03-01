import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Code from "./Code";
import GoogleSignUp from './GoogleSignUp';

const SignUp = () => {
    const [closeBtn, setCloseBtn] = useState(true);

    const handleClose = () => {
        setCloseBtn(prevCloseBtn => !prevCloseBtn);
    };
    
  return (
    <div className={`w-full h-[120vh] bg-charcoal-black flex justify-center align-middle fixed inset-0 ${closeBtn ? '' : 'hidden'}`}>
        <div className="w-1/3 h-full my-20 bg-white rounded-2xl">
            <div className="flex justify-end pt-2 pr-2">
            <button className="border-none" onClick={handleClose}><IoClose className="text-2xl bg-text-grey text-white rounded-full"/></button>
            </div>
            <p className="text-4xl font-bold text-center pt-4">Welcome</p>
            <p className="text-sm text-center font-bold text-text-grey">Let us start with your phone number</p>
            <div className="flex align-buttom justify-centermt-10 w-5/6 mt-7 mx-7">
                <Code/>
                <div className="w-56 mt-1 ml-4  countryList ">
                    <input type="text" placeholder="08....Phone Number" className="focus:outline-none border-2 h-9 rounded-md" />
                </div>
            </div>
            <button className="w-5/6 mx-8 my-4 text-white py-2 text-center bg-emerald-green rounded-full text-base">Continue</button>
            <p className="text-sm text-center">or with</p> 
            <div className="flex w-full flex-col align-middle">
                <GoogleSignUp/>
            </div>
        </div>
    </div>
  )
}

export default SignUp