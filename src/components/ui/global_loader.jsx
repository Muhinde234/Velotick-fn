// components/ui/global_loader.jsx
import { useIsFetching } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import Loader from "./loader.jsx"; // Ensure this path is correct

const GlobalLoader = () => {
    const isFetching = useIsFetching();
    const [showLoader, setShowLoader] = useState(false);

    // Prevent flickering by delaying hide
    useEffect(() => {
        let timeout;
        if (isFetching > 0) {
            setShowLoader(true);
        } else {
            timeout = setTimeout(() => setShowLoader(false), 200);
        }
        return () => clearTimeout(timeout);
    }, [isFetching]);

    // Debug: Log fetching state and current route
    console.log(`GlobalLoader: Active fetches = ${isFetching}, Showing = ${showLoader}, Path = ${window.location.pathname}`);

    if (!showLoader) return null;

    return (
        <div className="fixed inset-0 bg-white bg-opacity-50 z-[9999] flex items-center justify-center">
            <Loader />
        </div>
    );
};

export default GlobalLoader;