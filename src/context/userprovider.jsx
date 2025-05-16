import { createContext, useContext, useEffect, useState } from "react"
import { set } from "zod"


export const UserContext= createContext(null)

export const UserProvider = ({ children }) => {
    const [user,setUser] = useState(null)
    const[token,setToken] = useState(null)
    
    useEffect(() => {
        const token = localStorage.getItem("user")
        const storedToken =localStorage.getItem("token")

        if(storedUser && storedToken){
         setUser(JSON.parse(storedUser))
         setToken(storedToken)

        }
    },[])
    const login =(userData,tokenData)=>{
        setUser(userData)
        setToken(tokenData)
        localStorage.setItem('user',JSON.stringify(userData))
        localStorage.setItem('token',tokenData)
    };

    const logout = () => {
        setUser(null)
        setToken(null)
        localStorage.removeItem('user')
        localStorage.removeItem('token')
    }
    return(
        <UserContext.Provider value={{user,token,login,logout}}>
            {children}
        </UserContext.Provider>
    )
    
}
export const userUser=()=>{
    const context =useContext(UserContext)
    if(context===undefined){
        throw new Error("userUser must be used within a UserProvider")
    }
    return context;
}