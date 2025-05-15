import { Link } from "react-router-dom"
import Input from "../ui/input"
import { useState } from "react"
import Button from "../ui/button"



const ChangePassword = () => {
    const[Password,setPassword] = useState("")
    const[ConfirmPassword, setConfirmPassword] = useState("")
  return (
    <div>
     <div className="flex flex-col justify-center  items-center gap-10 h-screen">
        <div className="min-w-[540px] border border-gray-300 rounded-lg p-6">
              <h1 className="text-2xl text-center mb-8">Change Password </h1>
        <div>
            <Input
            label="New Password"
            value="Password"
            type="password"
            id="Passowrd"
            placeholder="enter your passowrd"
            />
            <Input
            label="Confirm-Password"
            value="ConfirmPassword"
            type="password"
            id="ConfirmPassword"
            placeholder="Re-enter your passowrd"

            />
            

        </div>
        <div className="mt-8">
    <Link to="/login"
        className="text-center"
        >
        <Button 
        className="border  border-primary-90 text-primary-100 p-2 rounded-full">
            Change Password
        </Button>

        </Link>
        </div>
      

        </div>
      
    </div>
    </div>
   
  )
}

export default ChangePassword