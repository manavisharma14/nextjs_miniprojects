"use client"
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { createPost } from "@/actions/create-post";
import { useActionState } from "react";


const PostCreateForm = () => {
    // const [formState, action] = useActionState(createTopics, {errors:{}})
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>New Post</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action={createPost}>
          <DialogHeader>
            <DialogTitle>Create a Post</DialogTitle>
            <DialogDescription>
              Write a new post. Click save when you are
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" />
            </div>
            {/* {formState.errors.name && <p className="text-sm text-red-600">{formState.errors.name}</p>} */}
            <div>
              <Label htmlFor="content" className="text-right">
                Content
              </Label>
              <Textarea id="content" name="content" />
            </div>
            {/* {formState.errors.description && <p className="text-sm text-red-600">{formState.errors.description}</p>} */}
            {/* {formState.errors.formError && <div className="border border-red-600 bg-red-200 p-2 rounded">{formState.errors.formError}</div>} */}
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full">
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default PostCreateForm;