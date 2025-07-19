"use server"

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const saveSnippet = async (id: number, code: string) => {
    await prisma.snippet.update({
        where: {
            id
        },
        data: {
            code
        }

    })
    revalidatePath(`/snippets/${id}`);
    redirect(`/snippets/${id}`);
}


export const deleteSnippet = async (id: number) => {
    await prisma.snippet.delete({
        where: {
            id
        }
    })
    revalidatePath("/");
    redirect('/');
}


export async function createSnippet(
    prevState: { message: string },
    formData: FormData
  ) {
    try {
      const title = formData.get("title");
      const code = formData.get("code");
  
      if (typeof title !== "string" || title.length < 4) {
        return { message: "Title must be at least 4 characters long" };
      }
  
      if (typeof code !== "string" || code.length < 8) {
        return { message: "Code must be at least 8 characters long" };
      }
  
      const snippet = await prisma.snippet.create({
        data: { title, code },
      });
  
      
    } catch (error: any) {
      console.error("Error creating snippet:", error.message);
      return { message: "An unexpected error occurred. Please try again." };
    }

    redirect('/');
    
  }