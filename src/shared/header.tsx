export default function Header() {
    return (
        <div className="fixed w-full px-2 h-15 select-none">
            <div className="w-full h-full bg-[#023047] rounded-b-xl flex flex-row justify-between items-center px-10 shadow-md shadow-[#023047]/20">
            <a href="./" className="font-alexandria text-3xl font-light hover:translate-x-2 duration-300 transition text-[#8ECAE6]">Physics C: Mechanics</a>
            <a href="https://www.linkedin.com/in/mason-douglas-mcmanus/" target="_blank" className="py-3 text-[#219EBC] duration-350 hover:-translate-y-[3px] cursor-pointer transition">Mason McManus</a>
            </div>
        </div>
    )
}