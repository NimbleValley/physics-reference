import { useState } from "react"
import type { PAGES } from "../types";

export default function Sidebar() {

    const [showUnit, setShowUnit] = useState<PAGES | ''>('');

    const units:PAGES[] = ['Ref Sheet', 'Unit 2', 'Unit 3'];
    const links: Record<PAGES, string> = {
        'Ref Sheet': './ref-sheet',
        'Home': './',
    }

    return (
        <div className="fixed h-[calc(100vh-6.5rem)] top-20 w-[15vw] px-2 ">
            <div className="w-full h-full bg-[#FFB703] rounded-xl flex flex-col justify-start py-3 gap-3 items-center text-[#023047] px-3 shadow-lg shadow-[#FB8500]/20 overflow-y-auto">
                {
                    units.map((value, i) => {
                        return <button key={i}>
                            <h3 onClick={() => window.open(links[value] ?? '/', '_self')} className="text-xl hover:shadow-md shadow-[#FB8500]/20 hover:bg-[#FB8500] hover:scale-105 duration-300 hover:text-white transition cursor-pointer px-10 py-2 rounded-lg">{value}</h3>
                        </button>
                    })
                }
            </div>
        </div>
    )
}