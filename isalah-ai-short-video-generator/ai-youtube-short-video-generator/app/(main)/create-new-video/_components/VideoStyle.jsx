import Image from 'next/image';
import { useState } from 'react';

export const options = [
    {
        name: 'Historic',
        image: '/Historic.jpeg'
    },
    {
        name: 'Kids',
        image: '/Kids.jpeg'
    },
    {
        name: 'Movie',
        image: '/Movie.jpeg'
    },
    {
        name: 'AI',
        image: '/AI.jpeg'
    },
    {
        name: 'Space',
        image: '/Space.jpeg'
    },
    {
        name: 'Horror',
        image: '/Horror.jpeg'
    },
    {
        name: 'Mythological',
        image: '/Mythological.jpeg'
    },
    {
        name: 'Tech',
        image: '/Tech.jpeg'
    },
    {
        name: 'True',
        image: '/True.jpeg'
    },
    {
        name: 'Fantasy',
        image: '/Fantasy.jpeg'
    },
    {
        name: 'Science',
        image: '/Science.jpeg'
    },
    {
        name: 'Motivational',
        image: '/Motivational.jpeg'
    }
]
function VideoStyle({ onHandleInputChange }) {
    const [selectedStyle, setSelectedStyle] = useState();
    return (
        <div className='mt-5'>
            <h2>Video Style</h2>
            <p className='text-sm text-gray-400 mb-1'>Select video style</p>
            <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2'>
                {
                    options.map((option, index) => (
                        <div className='relative'
                            key={index}
                            onClick={() => {
                                setSelectedStyle(option.name);
                                onHandleInputChange('videoStyle', option.name);
                            }}
                        >
                            <Image src={option.image}
                                alt={option.name}
                                width={500}
                                height={120}
                                className={`object-cover h-[70px]
                                lg:h-[90px] xl:h-[180px] rounded-lg p-1
                                hover:border border-gray-300 cursor-pointer
                                ${option.name === selectedStyle && 'border'}`}
                            />
                            <h2 className='absolute bottom-1 text-center w-full'>{option.name}</h2>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default VideoStyle