"use client";
import React from 'react'
import dynamic from 'next/dynamic'
import 'react-quill-new/dist/quill.snow.css';
import {useForm} from "react-hook-form"
import { journalSchema } from '@/lib/schema';
import { zodResolver } from "@hookform/resolvers/zod";
import { BeatLoader, BarLoader } from 'react-spinners';
import { Input } from "@/components/ui/input"


const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false })
const Journal = () => {
 const {register, handleSubmit, control, formState:{errors}} = useForm({
  resolver: zodResolver(journalSchema),
  defaultValues:{
    title:"",
    content:"",
    collectionId:"",
  },
 });
 const isLoading = false;
  return (
   
    <div className="container mx-auto px-4 py-8 space-y-8">
      <form>
       
       
    <h1 className='text-4xl md:text-5xl gradient-title'>What's your story today?</h1>
     {isLoading && <BarLoader color='purple' width ='100%' className="my-4"/>}
    <div className='space-y-3'>
      <p className='text-sm font-medium mt-4'>Capture your thoughts, moments, or ideas for today</p>
      <Input
            // disabled={isLoading}
            {...register("title")}
            placeholder="Give your entry a title..."
            className={`py-5 md:text-md  ${
              errors.title ? "border-purple-500" : ""
            }`}
        />
    </div>
     {/* Rich Text Editor */}
     <div className="mt-6">
          <ReactQuill
            className="border rounded-lg shadow-sm"
            theme="snow"
            placeholder="Write your thoughts here..."
          />
        </div>
    </form>
    </div>
  )
}

export default Journal