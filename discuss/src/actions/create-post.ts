'use server'
import {z} from 'zod';
import {auth} from "@/auth";
import { prisma } from '@/lib';

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

export const createPost = async (prevState: CreatePostFormState, formData: FormData) : Promise<CreatePostFormState> => {

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

    const topic = await prisma.topic.findFirst({
        where: {
            slug
        }
    })

    try {
        await prisma.post.create({
            data: {
                title: result.data.title,
                content: result.data.content,
                userId: session?.user?.id || '',
                // topicId: 
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

    if(!session?.user) {
        return {
            errors: {
                formError: ['You must be logged in to create a post.'],
            },
        };
    }


}