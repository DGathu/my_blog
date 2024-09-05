'use client'

import BackButton from "@/components/BackButton";
import FormPost from "@/components/FormPost";
import { FormInputPost } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { SubmitHandler } from "react-hook-form";

interface EditPostPageProps {
  params: {
    id: string;
  }
}

const EditPostPage: FC<EditPostPageProps> = ({ params }) => {
    const { id } = params;
    const router = useRouter();
    
    const { data: dataPost, isPending: isPendingPost } = useQuery({
      queryKey: ['posts', id],
      queryFn: async () => {
        const response = await axios.get(`/api/posts/${id}`);
        return response.data;
      }
    })

    const { mutate: updatePost, isPending: isPendingSubmit } = useMutation({
      mutationFn: (newPost: FormInputPost) => {
        return axios.patch(`/api/posts/${id}`, newPost);
      },
      onError: (error) => {
        console.error(error);
      },
      onSuccess: () => {
        router.push('/')
        router.refresh()
      }
    })
  
    console.log(dataPost);

    const handleEditPost: SubmitHandler<FormInputPost> = (data) => {
        updatePost(data);
    }
    
    if (isPendingPost || isPendingSubmit) {
      return (
        <div className="text-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )
    }

  return (
    <div>
        <BackButton />
        <h1 className='text-2xl my-4 font-bold text text-center'>Edit Post</h1>
        <FormPost submit={handleEditPost} initialValue={dataPost}
            isEditing
        />
    </div>
  )
};

export default EditPostPage