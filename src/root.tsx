import { Outlet } from "react-router-dom";
import Header from "./shared/header";
import Sidebar from "./shared/sidebar";

export default function Root() {
    return (
        <div>
            <Header />
            <Sidebar active="Ref Sheet" />
            <div className="flex flex-col items-center w-full h-full justify-center pt-30 pl-[15vw] pr-2">
                <Outlet/>
            </div>
        </div>
    )
}