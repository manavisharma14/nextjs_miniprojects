import PostShow from "@/components/post/post-show";
type PostShowPageProps = {
    params: Promise<{slug: string; postId: string}>;
}
export default async function PostShowPage({params}: PostShowPageProps) {
    const {slug, postId} = (await params);
    return (
        <div>
            <PostShow postId= {postId}/>

        </div>
    );
}