'use client'

import BackButton from '@/components/BackButton';
import FormPost from '@/components/FormPost';
import { FormInputPost } from '@/types';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';

const CreatePage = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
    createPost(data);
  }

  const { mutate: createPost } = useMutation({
    mutationFn: (newPost: FormInputPost) => {
      return axios.post('/api/posts/create', newPost);
    },
    onError: (error) => {
      console.error(error);
    },
    onSuccess: () => {
      router.push('/')
      router.refresh()
    }
  })

  return (
    <div>
      <BackButton />
      <h1 className='text-2xl my-4 font-bold text text-center'>Add New Post</h1>
      {isClient ? <FormPost submit={handleCreatePost} isEditing={false} /> : null}
    </div>
  )
}

export default CreatePage;