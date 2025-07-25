'use server'
import {z} from 'zod';
import {auth} from "@/auth";
import { prisma } from '@/lib';
import { redirect } from 'next/navigation';
import type { Post } from '@prisma/client';
import { revalidatePath } from 'next/cache';


const createPostSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    content: z.string().min(1, 'Content is required'),
})

type CreatePostFormState = {
    errors: {
        title?:string[],
        content?:string[],
        formError?:string[]
    }
}

export const createPost = async (slug: string, prevState: CreatePostFormState, formData: FormData) : Promise<CreatePostFormState> => {

    const result = createPostSchema.safeParse({
        title: formData.get('title'),
        content: formData.get('content')
    })

    if(!result.success){
        return {
            errors:result.error.flatten().fieldErrors,
        }
        }

    const session = await auth();
    if(!session || !session.user || !session.user.id) {
        return {
            errors: {
                formError: ['You must be logged in to create a post.'],
            },
        };
    }

    const topic = await prisma.topic.findFirst({
        where: {
            slug
        }
    })

    let post : Post;

    try {
        post = await prisma.post.create({
            data: {
                title: result.data.title,
                content: result.data.content,
                userId: session?.user?.id || '',
                topicId: topic?.id || '',
            }
        })
    } catch (error: unknown) {
        if(error instanceof Error){
            return {
                errors: {
                    formError: [error.message],
                }
            }
        }
        else{
            return {
                errors: {
                    formError: ['An unexpected error occurred.'],
                }
            }
        }
    }

    revalidatePath(`/topics/${slug}}`);
    redirect(`/topics/${slug}/posts/${post.id}`);


}