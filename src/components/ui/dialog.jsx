import PropTypes from "prop-types";
import {createContext, useContext, useEffect} from "react";
import Backdrop from "./backdrop.jsx";
import {X} from "lucide-react";

const DialogContext = createContext(undefined);

const DialogProvider = ({children, handleClose}) => {
    return(
        <DialogContext.Provider value={handleClose}>
            {children}
        </DialogContext.Provider>
    )
}

const Dialog = ({children, handleClose}) => {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                handleClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleClose]);

    return(
        <Backdrop onClick={handleClose}>
            <DialogProvider handleClose={handleClose}>
                <div
                    className="bg-white rounded-lg p-6"
                    onClick={(e) => e.stopPropagation()}
                >
                    {children}
                </div>
            </DialogProvider>
        </Backdrop>
    )
}

const useHandleClose = () => {
    const handleClose = useContext(DialogContext);
    if (!handleClose) {
        throw new Error("useHandleClose must be used within a Dialog");
    }
    return handleClose;
};


const DialogTitle = ({children}) => {
    const handleClose = useHandleClose();
    return(
        <div className="flex items-center justify-between border-b border-b-gray-200 pb-2 mb-4">
            <h1 className="text-dark font-bold text-2xl">{children}</h1>
            <span onClick={handleClose} className="cursor-pointer">
                <X size={24} />
            </span>
        </div>
    )
}

Dialog.Title = DialogTitle;


Dialog.propTypes = {
    children: PropTypes.node.isRequired,
    handleClose: PropTypes.func.isRequired,
};

DialogProvider.propTypes = {
    children: PropTypes.node.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default Dialog;