import PostCreateForm from "@/components/post/PostCreateForm";
import { Button } from "@/components/ui/button";
import PostList from "../../../components/post/post-list";
import { fetchPostByTopicSlug } from "@/lib/query/post";
type TopicShowPageProps = {
    params: Promise<{slug: string}>;
}
export default async function TopicShowPage( {params}: TopicShowPageProps) {

    const slug = (await params).slug;
    return (
        
        <div className="grid grid-cols-4 items-center gap-4">
            <div className="col-span-3">
                <h1 className="text-2xl font-bold">Topic: {slug}</h1>
                <PostList fetchData ={() => fetchPostByTopicSlug(slug)}  />
            </div>
            <div>
                <PostCreateForm slug={slug} />
                
            </div>
        </div>
    );
}