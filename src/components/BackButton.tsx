'use client'

import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const BackButton = () => {
  const router = useRouter();

  return (
    <button className='btn' onClick={() => router.back()}>
      <ArrowLeft /> Back
    </button>
  )
}

export default BackButton