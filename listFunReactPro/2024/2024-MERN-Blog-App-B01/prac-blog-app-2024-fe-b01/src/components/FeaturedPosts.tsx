import React from 'react'
import ImageComp from './ImageComp'
import { Link } from 'react-router-dom'

const FeaturedPosts = () => {
  return (
    <>
        <div className='mt-8 flex flex-col lg:flex-row gap-8'>
            {/* first */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
                {/* image */}
                <ImageComp 
                    src='featured1.jpeg'
                    className='rounded-3xl object-cover'

                />
                {/* details */}
                <div className="flex items-center gap-4">
                    <h1 className='font-semibold lg:text-lg'>01.</h1>
                    <Link to={`/`} className='text-blue-800 lg:text-lg'>Web design</Link>
                    <span className='text-gray-500'>2 days ago</span>
                </div>
                {/* title */}
                <Link to={`/test`} className='text-xl lg:font-bold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Link>
            </div>
            {/* Others */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
                {/* second */}
                <div className='lg:h-1/3 flex justify-between gap-4'>
                    <ImageComp
                        className='rounded-3xl object-cover w-1/3 aspect-video'
                        src={`featured2.jpeg`}
                    />
                    {/* Details and Titles */}
                    <div className='w-2/3'>
                        {/* details */}
                        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                            <h1 className='font-semibold'>02.</h1>
                            <Link to={`/`} className='text-blue-800'>Web Design</Link>
                            <span className='text-gray-500 text-sm'>2 days ago</span>
                        </div>
                        {/* title */}
                        <Link to={`/test`} className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'>
                        Lorem Ipsum is simply dummy text of the printing 
                        </Link>
                    </div>
                </div>
                {/* third */}
                <div className='lg:h-1/3 flex justify-between gap-4'></div>
                {/* fourth */}
                <div className='lg:h-1/3 flex justify-between gap-4'></div>
            </div>
        </div>
    </>
  )
}

export default FeaturedPosts