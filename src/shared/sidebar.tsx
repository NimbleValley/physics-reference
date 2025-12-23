import { Link, NavLink } from "react-router-dom";
import type { PAGES } from "../types";
import { useState } from "react";

export default function Sidebar({ active }: { active: PAGES }) {

    const units: PAGES[] = ['Home', 'Ref Sheet', 'Chapter 2', 'Chapter 3'];
    const links: Record<PAGES, string> = {
        'Ref Sheet': '/ref-sheet',
        'Home': '/',
        'Chapter 1': '/',
        'Chapter 2': '/chapter2',
        'Chapter 3': '/chapter3',
    }

    const descriptions: Record<string, string> = {
        'Chapter 2': '1D Kinematics',
        'Chapter 3': '/chapter3',
    }

    const [page, activePage] = useState<PAGES | '/'>('Home');

    return (
        <div className="fixed h-[calc(100vh-6.5rem)] top-20 w-[15vw] px-2">
            <div className="w-full h-full bg-[#FFB703] rounded-xl flex relative flex-col justify-start py-3 gap-1 items-center text-[#023047] px-3 shadow-lg shadow-[#FB8500]/20 overflow-y-auto">
                {
                    units.map((value, i) => {
                        return <button key={i} className="relative">
                            <NavLink to={links[value] ?? '/'} className={({ isActive, isPending }) => `${isActive && 'bg-[#FB8500]/50 font-semibold'} block relative group text-lg hover:shadow-md shadow-[#FB8500]/20 hover:bg-[#FB8500] hover:scale-105 duration-300 hover:text-white transition cursor-pointer px-7 py-2 rounded-lg`}>{value}
                                {descriptions[value] && <div className=" bottom-0 max-h-0 text-white opacity-0 group-hover:opacity-100 group-hover:max-h-screen transition-all duration-300">
                                    <h2 className="font-light text-sm">{descriptions[value]}</h2>
                                </div>}
                            </NavLink>
                        </button>
                    })
                }
            </div>
        </div>
    )
}