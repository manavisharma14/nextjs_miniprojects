"use client"
import { Button } from "@/components/ui/button";
import { signIn } from "@/actions/sign-in";
import { signOut } from "@/actions/sign-out";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { LogOut } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useSession } from "next-auth/react";
export default function AuthHeader() {
    const session = useSession();

    if(session.status == "loading") return null;

    let authContent: React.ReactNode;

    if (session.data?.user) {

        authContent = (
            <Popover>
                <PopoverTrigger asChild>
                    <Avatar>
                        <AvatarImage
                            src={session.data.user.image || ""}
                            alt={session.data.user.name || "User"}
                        />
                        <AvatarFallback>
                            {session.data.user.name?.charAt(0).toUpperCase() || "U"}
                        </AvatarFallback>
                    </Avatar>
                </PopoverTrigger>

                <PopoverContent className="p-4 w-56 border shadow-md">
                    <h1 className="text-sm text-gray-800">{session.data.user.name}</h1>
                    <Separator className="my-2" />
                    <form action={signOut}>
                        <Button variant="default" className="w-full justify-start gap-2">
                            <LogOut size={16} /> Sign out
                        </Button>
                    </form>
                </PopoverContent>
            </Popover>
        )
    } else
        authContent = (
            <>
                <form action={signIn}>
                    <Button variant={"outline"}>Sign In</Button>
                </form>
                <form action={signOut}>
                    <Button>Sign Out</Button>
                </form>
                </>
        );
    

    return authContent; // ✅ Proper placement with no newline
}