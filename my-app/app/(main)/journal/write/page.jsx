"use client";
import React from 'react'
import dynamic from 'next/dynamic'
import 'react-quill-new/dist/quill.snow.css';
import {useForm, Controller} from "react-hook-form"
import { journalSchema } from '@/lib/schema';
import { zodResolver } from "@hookform/resolvers/zod";
import { BarLoader } from 'react-spinners';
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';


const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });
export default function Journal() {
 const {register, handleSubmit, control, formState:{errors}} = useForm({
  resolver: zodResolver(journalSchema),
  defaultValues:{
    title:"",
    content:"",
    collectionId:"",
  },
});
 const isLoading = false;
 const onSubmit = handleSubmit(async (data) => {
  console.log(data)
 });
  return (
   
    <div className="container mx-auto px-4 py-8 space-y-8">
      <form onSubmit = {onSubmit}>
    <h1 className='text-4xl md:text-5xl gradient-title'>What's your story today?</h1>
     {isLoading && <BarLoader color='purple' width ='100%' className="my-4"/>}
     <div className="space-y-2">
          <label className="text-sm font-medium">Title</label>
          <Input
            disabled={isLoading}
            {...register("title")}
            placeholder="Give your entry a title"
            className={`py-5 md:text-md bg-transparent border-gray-400 ${
              errors.title ? "border-red-500" : ""
            }`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>
     {/* Rich Text Editor */}
     <div className="mt-6">
     <Controller
            name="content"
            control={control}
            render={({ field }) => (
              <ReactQuill
                readOnly={isLoading}
                theme="snow"
                value={field.value}
                onChange={field.onChange}
                modules={{
                  toolbar: [
                    [{ header: [1, 2, 3, false] }],
                    ["bold", "italic", "underline", "strike"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["blockquote", "code-block"],
                    ["link"],
                    ["clean"],
                  ],
                }}
              />
            )}
          />
          {errors.content && (
            <p className="text-red-500 text-sm">{errors.content.message}</p>
          )}
        </div>
        <div className='gap-2 py-4'> 
        <Button variant="journal" className="flex items-center gap-2">
              <span>Sumbit</span></Button>
              </div>
    </form>
    </div>
  );
}
