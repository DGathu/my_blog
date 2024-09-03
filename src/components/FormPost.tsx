'use client';

import { FormInputPost } from '@/types';
import { Tag } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

interface FormPostProps {
  submit: SubmitHandler<FormInputPost>;
  isEditing: boolean;
}

const FormPost: FC<FormPostProps> = ({ submit, isEditing }) => {
  const { register, handleSubmit, setValue } = useForm<FormInputPost>();

  // fetch list tags
  const { data: dataTags, isLoading: isLoadingTags } = useQuery<Tag[]>({
    queryKey: ['tags'],
    queryFn: async () => {
      const response = await axios.get('/api/tags');
      return response.data;
    },
  });
  console.log(dataTags);

  const [tags, setTags] = useState<{ value: string; label: string }[]>([]);

  const animatedComponents = makeAnimated();

  const handleTagsChange = (selectedOptions: any) => {
    setTags(selectedOptions);
    setValue('tag', selectedOptions.map((option: any) => option.value));
  };

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      width: '100%',
      maxWidth: '600px',
      backgroundColor: '#1f2937', // Dark background color
      borderColor: '#4b5563', // Border color
    }),
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: '#1f2937', // Dark background color for dropdown
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#374151' : '#1f2937', // Dark background color for options
      color: '#ffffff', // Text color
    }),
    multiValue: (provided: any) => ({
      ...provided,
      backgroundColor: '#374151', // Dark background color for selected tags
      color: '#ffffff', // Text color
    }),
    multiValueLabel: (provided: any) => ({
      ...provided,
      color: '#ffffff', // Text color for selected tags
    }),
    multiValueRemove: (provided: any) => ({
      ...provided,
      color: '#ffffff', // Remove icon color
      ':hover': {
        backgroundColor: '#ef4444', // Background color on hover
        color: '#ffffff', // Text color on hover
      },
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: '#9ca3af', // Placeholder text color
    }),
  };

  const options = dataTags?.map(item => ({
    value: item.id,
    label: item.name,
  }));

  return (
    <form onSubmit={handleSubmit(submit)} className='flex flex-col items-center justify-center gap-5 mt-10'>
      <input
        type="text"
        {...register("title", { required: true })}
        placeholder="Post Title"
        className="input input-bordered w-full max-w-lg"
      />

      <textarea
        {...register("content", { required: true })}
        className="textarea textarea-bordered w-full max-w-lg"
        placeholder="Post Content"
      ></textarea>

      {isLoadingTags ? (
        <span className="loading loading-ring loading-md"></span>
      ) : (
        <Select
        {...register("tag", { required: true })}
        isMulti
        name="tags"
        className="basic-multi-select w-full max-w-lg"
        classNamePrefix="select"
        components={animatedComponents}
        value={tags}
        onChange={handleTagsChange}
        styles={customStyles}
        placeholder="Select Tags"
        isClearable
        isSearchable
        options={options}
      />
      )}

      <button type='submit' className='btn btn-primary w-full max-w-lg'>
        {isEditing ? 'Update' : 'Create'}
      </button>
    </form>
  );
};

export default FormPost;