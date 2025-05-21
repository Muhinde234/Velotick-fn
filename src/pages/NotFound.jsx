import { ArrowUp } from "lucide-react";
import error from "../assets/error.svg"
import Button from "../components/ui/button";
import {useNavigate} from "react-router-dom";
import SEO from "../components/ui/seo";

const NotFound = () => {
    const navigate = useNavigate();
    return (

        <div className="container mx-auto px-4 md:px-8">
             <SEO title="Not Found" description="Not Found" content="Not Found" />
            <div className="flex items-center h-screen justify-center">
                <div className="flex flex-col max-w-screen-2xl justify-center items-center">
                    <img src={`${error}`} alt="" className="w-full"/>
                    <div className="flex flex-col items-center">
                        <h1 className="font-bold text-dark mb-6 text-3xl">Page Not Found</h1>
                        <p className="font-medium text-muted text-center">This page is still under development by the team, come back in later time.</p>
                        <div className="flex mt-6 bg-gray-200 gap-3 p-4 rounded-full cursor-pointer">
                             <Button
                            className="cursor-pointer"
                            onClick={() => {navigate("/", {replace: true})}}>
                            Go to Home

                        </Button>
                        <ArrowUp size={20}/>

                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}


export default NotFound;