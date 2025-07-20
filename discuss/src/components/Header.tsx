import { Input } from "@/components/ui/input";
import AuthHeader from "./Auth-header";

export default async function HeaderPage() {

    return (
        <div className="grid grid-cols-3 items-center px-4 py-10">
            <div className="flex justify-start items-center">
                <h1 className="font-bold text-xl">Discuss</h1>
            </div>
            <div className="flex justify-center items-center">
                <Input type="text" placeholder="Search post ..." />
            </div>
            <div className="flex justify-end items-center gap-2">

                <AuthHeader />

            </div>
        </div>
    )
}