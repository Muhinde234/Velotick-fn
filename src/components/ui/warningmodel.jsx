import Button from "./button"


const Warningmodel = () => {
  return (
    <div>
        <h1>Warning!</h1>
        <p>Are you sure? This action can not be undone!</p>
        <div className="flex justify-end gap-3">
            <Button
            className="border border-primary-100 text-primary-90  p-3"
            >cancel</Button>
            <Button
            className="bg-red-700 text-white p-3"
            >confirm</Button>

        </div>
    </div>
  )
}

export default Warningmodel