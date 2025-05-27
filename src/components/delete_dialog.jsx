import Button from "./ui/button.jsx";
import Dialog from "./ui/dialog.jsx";

export default function DeleteDialog({ onDelete, onCancel, isPending = false }) {
    const handleClose = () => {
        if (onCancel) {
            onCancel();
        }
    };

    return(
        <Dialog handleClose={handleClose}>
            {/*<Dialog.Title>Confirm Deletion</Dialog.Title>*/}
            <div className="flex flex-col justify-end gap-3">
                <h1 className="text-xl text-center font-bold text-red-600 mb-2">
                    Warning!
                </h1>
                <p className="text-gray-700 mb-6">
                    Are you sure? This action cannot be undone!
                </p>
                <div className="flex justify-between">
                    <Button
                        onClick={onCancel}
                        disabled={isPending}
                        className="border border-primary-100 text-primary-90 px-4 py-2 rounded-md hover:bg-gray-50"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={onDelete}
                        disabled={isPending}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                    >
                        {isPending ? "Deleting..." : "Confirm"}
                    </Button>
                </div>
            </div>
        </Dialog>
    )
}