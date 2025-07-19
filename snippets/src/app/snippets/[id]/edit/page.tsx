import EditSnippetForm from "@/components/EditSnipptForm";
import { prisma } from "@/lib/prisma";

type EditPageSnipptProps = {
  params: Promise<{ id: string }>;
};

export default async function EditPageSnippt({ params }: EditPageSnipptProps) {
  const id = parseInt((await params).id);

  const snippet = await prisma.snippet.findUnique({ where: { id } });

  if (!snippet) {
    return (
      <div className="text-center">
        <h1 className="font-bold text-3xl text-pink-500">Snippet not found</h1>
      </div>
    );
  }

  return (
    <div>
      <h1 className="font-bold text-3xl text-pink-500 text-center mb-6">
        Editing Snippet {id}
      </h1>
      <div className="max-w-3xl mx-auto">
        <EditSnippetForm snippet={snippet} />
      </div>
    </div>
  );
}