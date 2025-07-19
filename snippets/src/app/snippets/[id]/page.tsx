import React from 'react'
import { prisma } from '@/lib/prisma'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import * as actions from '@/actions'
import { notFound } from 'next/navigation'

type SnippetDetailsProps = {
  params: Promise<{ id: string }>
}

export default async function SnippetDetailsPage({ params }:
  SnippetDetailsProps) {

  const id = parseInt((await params).id);

  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    }
  })

  if (!snippet) notFound();

  const deleteSnippetAction = actions.deleteSnippet.bind(null, id);

  return (
    <div className='flex flex-col gap-5'>
      <div className='flex items-center justify-between mx-auto max-w-2xl p-4 gap-5'>
        <h1 className='text-3xl font-bold text-blue-400'>{snippet.title}</h1>
        <div className='flex gap-5 my-4'>
          <Link href={`/snippets/${id}/edit`}><Button className='bg-gray-800 text-white'>Edit</Button></Link>
          <form action={deleteSnippetAction}>
            <Button className='bg-red-600 text-white'>Delete</Button>
          </form>

        </div>

      </div>

      <pre className='bg-gray-100 p-4 rounded-lg mx-auto max-w-2xl'>
        <code>{snippet?.code}</code>
      </pre>
    </div>
  )
}

export const generateStaticParams = async () => {
  const snippets = await prisma.snippet.findMany();

  return snippets.map((snippet) => {
    return {
      id: snippet.id.toString()
    }
  })
}