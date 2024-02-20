import { Outlet } from "react-router-dom";
import Header from "./Header";
import Hero from "./Hero";

const Root = () => {
  return (
    <div>
        <div className="relative">
            <Header/>
            <Hero/>
        </div>
        <Outlet/>
    </div>
  )
}

export default Root