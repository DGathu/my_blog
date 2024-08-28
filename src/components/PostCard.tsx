import Link from 'next/link'
import React from 'react'

const PostCard = () => {
  return (
    <div className="card glass w-full border">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="car!" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Life hack</h2>
    <p>How to park your car at your garage?</p>
    <div className="card-actions justify-end">
      <Link href='/blog/1' className='hover:underline'> Read More</Link>
    </div>
  </div>
</div>
  )
}

export default PostCard