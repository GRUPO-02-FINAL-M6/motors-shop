import { Outlet } from "react-router-dom"
import { LoadingAnimation } from "../components/Loading"
import { useContext } from "react"
import { UserContext } from "../providers/userProvider"

export const ProtectedRoutes = () => {
    const {loading} = useContext(UserContext)
    
    if(loading){
        return (
            <LoadingAnimation />
        )
    }

    return <Outlet/>
}