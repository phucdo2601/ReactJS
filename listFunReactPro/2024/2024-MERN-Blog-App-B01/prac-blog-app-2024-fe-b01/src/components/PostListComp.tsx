import React from 'react'
import PostListItemComp from './PostListItemComp'

const PostListComp = () => {
  return (
    <>
        <div className='flex flex-col gap-12 mb-8'>
            <PostListItemComp />
            <PostListItemComp />
            <PostListItemComp />
            <PostListItemComp />
            <PostListItemComp />
            <PostListItemComp />

        </div>
    </>
  )
}

export default PostListComp