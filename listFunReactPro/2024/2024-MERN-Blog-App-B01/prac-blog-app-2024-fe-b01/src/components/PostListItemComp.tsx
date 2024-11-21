import React from 'react'
import ImageComp from './ImageComp'
import { Link } from 'react-router-dom'

const PostListItemComp = () => {
  return (
    <>
        <div className='flex flex-col xl:flex-row gap-8'>
            {/* image */}
            <div className="md:hidden xl:block">
                <ImageComp
                    src='postImg.jpeg' className='rounded-2xl object-cover'

                />
            </div>
            {/* details */}
            <div className="">
                <Link to={`/test`} className='text-4xl font-semibold'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Link>
            </div>
        </div>
    </>
  )
}

export default PostListItemComp