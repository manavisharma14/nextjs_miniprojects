"use client"
import React from "react";
import { useState } from "react";
import type { Snippet } from "@prisma/client";
import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { saveSnippet } from "@/actions";



export default function EditSnippetForm ({snippet} : {snippet: Snippet}) {

    const [code, setCode] = useState(snippet.code)

    const changeEventHandler = (value: string = "") => {
        setCode(value || "");
    }
 
    // you can't use server actions as an inline inside client component
    // async function saveSnippet = () => {
    //     "use server";

    // }

    const saveSnippetAction = saveSnippet.bind(null, snippet.id, code);


    return (
        <div className="flex flex-col gap-4">
                <form action={saveSnippetAction} className="flex gap-4 items-center mb-6 items-center justify-between">
                    <h1 className="font-bold text-xl">Your code editor</h1>
                    <Button className="bg-gray-800 text-white" type="submit">Save</Button>
                </form>
   
                <Editor 
                    height="90vh"
                    width="100%"
                    defaultLanguage="javascript"
                    value={code}
                    onChange={changeEventHandler}
                    theme="vs-dark"
             />
            </div>
    )
}