import { CardHeader, Card, CardTitle, CardDescription } from "@/components/ui/card";
import { PostWithData } from "@/lib/query/post";

type PostListProps = {
    fetchData: () => Promise<PostWithData[]>;
}

export default async function PostList( {fetchData}: PostListProps) {

    const posts = await fetchData();
    console.log(posts);
    return (
        <div className="flex flex-col gap-2">
            {
                posts.map((post) => (
                    <Card key={post.id}>
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold">
                                Post Title {post.title}
                            </CardTitle>
                            <CardDescription className="text-sm text-muted-foreground">
                                <h1>By {post.user?.name}</h1>
                                <h1> Comments {post._count.comments}</h1>

                            </CardDescription>
                        </CardHeader>
                    </Card>
                ))
            }
        </div>
    );
}