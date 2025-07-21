import { notFound } from "next/navigation";
import {prisma} from "@/lib";
type PostShowProps = {
    postId: string
}
export default async function PostShow({postId}: PostShowProps) {

    const post = await prisma.post.findFirst({
        where: {
            id: postId
        }
    });

    if(!post) notFound();
    return (
        <div>
            <h1 className="font-bold text-2xl my-2">{post.title}</h1>
            <p className="border rounded p-4">{post.content}</p>
        </div>
    );
}