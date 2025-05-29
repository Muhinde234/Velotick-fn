import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div className="p-10 text-center">
            <h1 className="text-2xl font-bold text-red-600">Something went wrong </h1>
            <p>{error?.message || "An unexpected error occurred."}</p>
        </div>
    );
}
