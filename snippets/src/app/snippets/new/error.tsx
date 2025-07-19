"use client"
type ErrorPageProps = {
    error: Error;
}
export default function ErrorPage({error} : ErrorPageProps) {
    return (
        <div>
            <h1>{error.message}</h1>
        </div>
    )
}