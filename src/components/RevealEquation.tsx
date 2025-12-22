import 'katex/dist/katex.min.css';
import { useState } from 'react';
import { InlineMath, BlockMath } from 'react-katex';

export function RevealEquation({ text }: { text: string }) {

    const [reveal, setReveal] = useState(false);

    return (
        <div className='flex flex-col'>
            <button onClick={() => !reveal && setReveal(true)} className={`${!reveal && 'ring-2 ring-black/25 hover:ring-2 hover:ring-black/80 cursor-pointer'} scale-150 rounded-md px-3`}>
                <div className={`${!reveal && 'blur-[4px]'}`}>
                    <BlockMath>{text}</BlockMath>
                </div>
            </button>
            {reveal &&
                <button onClick={() => setReveal(false)} className='text-gray-700 hover:text-black text-sm font-light cursor-pointer underline py-2 px-5'>Hide</button>
            }
        </div>
    )
}