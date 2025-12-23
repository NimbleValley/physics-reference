import 'katex/dist/katex.min.css';
import { useState } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import { RevealEquation } from "../../components/RevealEquation";
import { Vfv0atgraph } from './vfv0atgraph';
import { DeltaxGraph } from './deltax';

const eq2 = String.raw`\LARGE \Delta x = \upsilon _0 t + \frac{1}{2}at^2`;
const eqDerive = String.raw`\begin{aligned}
  v_f &= v_0 + at \\[1.25em]
  t &= \frac{v_f - v_0}{a} \\[1.25em]
  \Delta x &= v_0 t + \frac{1}{2}at^2 \\[1.25em]
  \Delta x &= v_0 \left(\frac{v_f - v_0}{a}\right) + \frac{1}{2}a\left(\frac{v_f - v_0}{a}\right)^2 \\[1.25em]
  \Delta x &= \frac{v_f v_0 - v_0^2}{a} + \frac{v_f^2 + v_0^2 - 2v_f v_0}{2a} \\[1.25em]
  2a\Delta x &= (2v_f v_0 - 2v_0^2) + (v_f^2 + v_0^2 - 2v_f v_0) \\[1.25em]
  2a\Delta x &= v_f^2 - v_0^2 \\[1.25em]
  \mathbf{v_f^2} &\mathbf{= v_0^2 + 2a\Delta x}
\end{aligned}`;

export default function Chapter2() {

    return (<div className="flex flex-col items-center px-10 mb-10">
        <h1 className="text-4xl text-[#023047] mb-3">Chapter 2: Motion in 1D</h1>
        <h3 className="text-md font-light mb-7">One-dimensional kinematics, equations, velocities, etc.</h3>

        <h3 className="text-xl font-light"><span className="font-semibold text-2xl mr-3">What are kinematics?</span> Kinematics help describe motion of objects that we can study in physics, such as a particle flying through the air.
            There are three main equations, click to reveal them:</h3>

        <div className="flex flex-row justify-between mt-10 w-full px-10">
            <RevealEquation text="\LARGE \upsilon _f  = \upsilon _0  + at" />
            <RevealEquation text=" \LARGE \Delta x = \upsilon _0 t + \frac{1}{2}at^2" />
            <RevealEquation text="\LARGE \upsilon_f ^2  = \upsilon _0 ^2  + 2a\Delta x" />
        </div>

        <h3 className="text-xl font-light mt-10">However, note that these equations are only applicable when <span className="font-semibold">acceleration is constant</span>, the motion is in a <span className="font-semibold">straight line/simple motion</span>, and values like <span className="font-semibold">vf or a</span> are given. These equations cannot be used with varying acceleration, rotational motion, or changing 3D direction.</h3>

        <h3 className="text-xl font-light mt-12"><span className="font-semibold text-2xl mr-3">Where do these equations come from?</span> Explore the visuals below: </h3>

        <div className="grid grid-cols-2 mt-10 gap-10">
            <div className="flex flex-col h-full justify-center bg-[#FFB703] p-5 rounded-2xl">
                <h2 className='text-lg font-light'>The graph of velocity vs. time for an object with constant acceleration will form a <span className="font-semibold">linear graph</span>, with the <span className="font-semibold">line's slope being the acceleration</span> (acceleration is the derivative of velocity) and the <span className="font-semibold">line's y-intercept being the initial velocity</span>. This can be proven by integrating a = dV/dT with respect to time. Thinking of this relationship in terms of y = b+mx yields the first kinematics equation:</h2>
                <BlockMath>\LARGE \upsilon _f  = \upsilon _0  + at</BlockMath>
            </div>
            <div className="flex flex-col h-full justify-center">
                <Vfv0atgraph />
            </div>
        </div>
        <div className="grid grid-cols-2 mt-6 gap-10">
            <div className="flex flex-col h-full justify-center">
                <DeltaxGraph />
            </div>
            <div className="flex flex-col h-full justify-center bg-[#8ECAE6] p-5 rounded-2xl">
                <h2 className='text-lg font-light'>To find change in position, the velocity function must be integrated, as velocity is the derivative of position. Integrating the first kinematics equation, vf = v0 + at, with respect to time, yields the following:</h2>
                <BlockMath>{eq2}</BlockMath>
                <h3 className="text-sm font-light text-center w-full">It is also worth noting that adding the initial position, x0, to the equation above allows for determining the actual position of the object rather than just its displacement.</h3>
            </div>
        </div>
        <div className="mt-6 gap-10">
            <div className="flex flex-col h-full justify-center bg-[#FB8500] p-5 rounded-2xl">
                <h2 className='text-lg font-light'>The final equation simply requires substitution to derive:</h2>
                <BlockMath>{eqDerive}</BlockMath>
            </div>
        </div>

        <h3 className="text-xl font-light mt-12"><span className="font-semibold text-2xl mr-3">Acceleration changes velocity:</span> Velocity in turn changes the object's position. So, an object with 0 acceleration can still be moving, and an object positive acceleration can either be at rest or moving in the negative direction. The chart below reinforces these ideas:</h3>

        <div className="mt-5 grid grid-cols-4 grid-rows-3 border-1 [&>*]:border [&>*]:border-black [&>*]:px-3 [&>*]:py-1 [&>h1]:text-xl [&>h1]:underline [&>h2]:font-light text-center rounded-lg">
            <h1 className='rounded-tl-lg'>{'V=0, a = 0'}</h1>
            <h1>{'V=0, a > 0'}</h1>
            <h1>{'V>0, a = 0'}</h1>
            <h1 className='rounded-tr-lg'>{'V>0, a > 0'}</h1>
            <h2 className='text-md '>Object is truly at rest and is not about to move. </h2>
            <h2 className='text-md '>Object is not moving but has acceleration </h2>
            <h2 className='text-md '>Object is moving at a constant speed </h2>
            <h2 className='text-md '>Object is moving at an increasing speed </h2>
            <h2 className='text-md rounded-bl-lg'>ex. a resting book, a parked car </h2>
            <h2 className='text-md '>ex.  pendulum at its highest point, ball at its apex height </h2>
            <h2 className='text-md '>ex. a puck on ice, PASCO car (both assuming no friction)</h2>
            <h2 className='text-md rounded-br-lg'>ex. A ball rolling down a hill, skydiver (before v terminal)</h2>
        </div>

        <h3 className="text-xl font-light mt-12"><span className="font-semibold text-2xl mr-3">Gravitational acceleration, g:</span> The value g describes the <span className="font-semibold">MAGNITUDE</span> of acceleration due to gravity, about 9.8m/s^2 on Earth. <span className="font-semibold">Because g is a MAGNITUDE, it is always positive</span>, never negative. If g is entered in for acceleration, though, it usually is substituted as -g, so -9.8. Note that g is still positive, it is just being multiplied by -1.</h3>

        <h3 className="text-xl font-light mt-12"><span className="font-semibold text-2xl mr-3">Speed ≠ Velocity:</span> Speed is the magnitude of velocity, meaning speed is always positive and is a scalar. Velocity on the other hand has a magnitude and direction, meaning it can be negative and in any direction. Thererfore, average speed and average velocities are generally not equal. <span className="font-semibold">See the scenarios below:</span></h3>

        <div className="grid grid-cols-2 mt-6 gap-10 text-lg">
            <div className="rounded-lg bg-[#8ECAE6] p-6">
                <h3>A car drives forward, then reverses to its original position. The average velocity is 0 because the directions cancel out, yet the average speed is some positive number.</h3>
            </div>
            <div className="rounded-lg bg-[#FB8500] p-6">
                <h3>A ball is thrown straight up and caught. Once again, the object has an average velocity very close to 0, while its average speed will be a much higher positive number.</h3>
            </div>
        </div>
    </div>
    )
}