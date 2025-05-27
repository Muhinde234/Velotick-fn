import PropTypes from "prop-types";
import {useEffect} from "react";

const Backdrop = ({children, onClick}) => {
    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "";
        };
    }, []);

    return(
        <div
            onClick={onClick}
            className="fixed z-10 left-0 top-0 w-full h-full bg-black/70 flex items-center justify-center"
        >
            {children}
        </div>
    )
}

Backdrop.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}


export default Backdrop;