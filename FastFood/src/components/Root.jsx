import { Outlet } from "react-router-dom";
import Header from "./Header";

const Root = () => {
  return (
    <div>
        <div>
            <Header/>
        </div>
        <Outlet/>
    </div>
  )
}

export default Root