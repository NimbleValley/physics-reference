import { Link, NavLink } from "react-router-dom";
import type { PAGES } from "../types";
import { useState } from "react";

export default function Sidebar({ active }: { active: PAGES }) {

    const units: PAGES[] = ['Home', 'Ref Sheet', 'Unit 2', 'Unit 3'];
    const links: Record<PAGES, string> = {
        'Ref Sheet': '/ref-sheet',
        'Home': '/',
        'Unit 1': '/',
        'Unit 2': '/',
        'Unit 3': '/',
    }

    const [page, activePage] = useState<PAGES | '/'>('Home');

    return (
        <div className="fixed h-[calc(100vh-6.5rem)] top-20 w-[15vw] px-2 ">
            <div className="w-full h-full bg-[#FFB703] rounded-xl flex flex-col justify-start py-3 gap-3 items-center text-[#023047] px-3 shadow-lg shadow-[#FB8500]/20 overflow-y-auto">
                {
                    units.map((value, i) => {
                        return <button key={i}>
                            <NavLink to={links[value] ?? '/'} className={({ isActive, isPending }) => `${isActive && 'bg-[#FB8500]/50 font-semibold'} block text-xl hover:shadow-md shadow-[#FB8500]/20 hover:bg-[#FB8500] hover:scale-105 duration-300 hover:text-white transition cursor-pointer px-10 py-2 rounded-lg`}>{value}</NavLink>
                        </button>
                    })
                }
            </div>
        </div>
    )
}