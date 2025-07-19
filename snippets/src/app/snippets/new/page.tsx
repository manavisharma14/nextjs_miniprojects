"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { useActionState } from 'react'
import * as actions from '@/actions'

const CreateSnippetPage = () => {

  const [formStateData, xyz] = useActionState(actions.createSnippet, {message: ""});
  return (
    <form action={xyz} className='max-w-2xl mx-auto p-4'>
      <div className='mb-4'>
        <Label className='mb-2'>Title</Label>
        <Input
          type='text'
          name="title"
          id='title'
          placeholder="Enter snippet title"
        />
      </div>

      <div className='mb-4'>
        <Label className='mb-2'>Code</Label>
        <Input
          type='text'
          name="code"
          id='code'
          placeholder="Enter your code snippet here"
        />
      </div>

      <div>
        {formStateData.message && (
          <div className='text-red-500 text-sm mb-2'>
            {formStateData.message}
          </div>
        )}
      </div>

      <Button type="submit" className='my-4'>New + </Button>
    </form>
  )
}

export default CreateSnippetPage