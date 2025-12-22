import { RevealEquation } from "../../components/RevealEquation";

export default function Chapter2() {

    return (<div className="flex flex-col items-center px-10">
        <h1 className="text-4xl text-[#023047] mb-3">Chapter 2: Motion in 1D</h1>
        <h3 className="text-md font-light mb-7">One-dimensional kinematics, equations, velocities, etc.</h3>

        <h3 className="text-xl font-light"><span className="font-semibold text-2xl mr-3">What are kinematics?</span> Kinematics help describe motion of objects that we can study in physics, such as a particle flying through the air.
            There are three main equations, click to reveal them:</h3>

        <div className="flex flex-row justify-between mt-10 w-full px-10">
            <RevealEquation text="\upsilon_f ^2  = \upsilon _0 ^2  + 2a\Delta x" />
            <RevealEquation text="\upsilon _f  = \upsilon _0  + at" />
            <RevealEquation text="\Delta x = \upsilon _0 t + \frac{1}{2}at^2" />
        </div>
        
        <h3 className="text-xl font-light mt-10">However, note that these equations are only applicable when <span className="font-semibold">acceleration is constant</span>, the motion is in a <span className="font-semibold">straight line/simple motion</span>, and values like <span className="font-semibold">vf or a</span> are given.</h3>
    </div>
    )
}