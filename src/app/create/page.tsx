'use client'

import BackButton from '@/components/BackButton'
import FormPost from '@/components/FormPost'
import { FormInputPost } from '@/types'
import React from 'react'
import { SubmitHandler } from 'react-hook-form'

const CreatePage = () => {
    const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
        console.log(data);
    }
  return (
    <div>
        <BackButton />
        <h1 className='text-2xl my-4 font-bold text text-center'>Add New Post</h1>
        <FormPost submit={handleCreatePost} isEditing={false} />
    </div>
  )
}

export default CreatePage