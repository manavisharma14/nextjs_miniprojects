import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

// export const dynamic = 'force-dynamic'; // This will ensure the page is always fresh and not cached
export default async function Home() {

  const snippets = await prisma.snippet.findMany();


  return (
    <div>
      <h1 className="font-bold text-4xl">Home</h1>
      <div className="flex items-center justify-between">
        <h1>Snippets</h1>
        <Link href="/snippets/new">
        <Button className="bg-blue-200">New</Button>
        </Link>
      </div>
      {
        snippets.map((snippet) => (
          <div key={snippet.id} className=" flex items-center justify-between bg-gray-200 border p-4 my-2">
            <h1>{snippet.title}</h1>
            <Link href={`snippets/${snippet.id}`}> <Button variant={'link'} className="bg-blue-200 hover:bg-blue-700">View</Button> </Link>
          </div>
        ))
      }
    </div>
  );
}
