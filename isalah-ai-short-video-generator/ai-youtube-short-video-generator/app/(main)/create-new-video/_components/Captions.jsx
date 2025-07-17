import { useState } from 'react';
const options = [
    {
        name: 'YOUTUBER',
        style: 'text-yellow-400 text-4xl font-extrabold uppercase'
    },
    {
        name: 'DEVELOPER',
        style: 'text-white text-4xl italic font-bold'
    },
    {
        name: 'NEON',
        style: 'text-green-500 text-4xl font-extrabold uppercase'
    },
    {
        name: 'GLITCH',
        style: 'text-pink-500 text-4xl font-extrabold uppercase'
    },
    {
        name: 'FIRE',
        style: 'text-red-500 text-4xl font-extrabold uppercase'
    },
    {
        name: 'FUTURISTIC',
        style: 'text-blue-500 text-4xl font-extrabold uppercase'
    }
];
function Captions({ onHandleInputChange }) {
    const [selectedCaptionStyle, setSelectedCaptionStyle] = useState();
    return (
        <div className='mt-5'>
            <h2>Caption Style</h2>
            <p className='text-sm text-gray-400'>Select caption style</p>

            <div className='flex flex-wrap gap-4 mt-2'>
                {options.map((option, index) => (
                    <div key={index}
                        onClick={() => {
                            setSelectedCaptionStyle(option.name);
                            onHandleInputChange('caption', option)
                        }}
                        className={`p-2 hover:border bg-slate-900
                    border-gray-300 cursor-pointer rounded-lg
                    ${selectedCaptionStyle == option.name && 'border'}`}>
                        <h2 className={option.style}>{option.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Captions