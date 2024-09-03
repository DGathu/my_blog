import { Tag } from '@prisma/client';
import Link from 'next/link'
import React, { FC } from 'react'


interface PostCardProps {
  post: {
    id: string;
    title: string;
    content: string;
    tag: Tag;
  }
}
const PostCard: FC<PostCardProps> = ({ post }) => {

  const { title, content, tag } = post;

  return (
    <div className="card glass w-full border">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="car!" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{content}</p>
    <div className="card-actions justify-end">
      <span className="badge badge-neutral">{tag.name}</span>
      <Link href='/blog/1' className='hover:underline'> Read More</Link>
    </div>
  </div>
</div>
  )
}

export default PostCard