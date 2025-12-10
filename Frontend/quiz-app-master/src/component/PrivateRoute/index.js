import { Navigate } from "react-router-dom"
import { useAuth } from "../../context/Auth-Context"

export const PrivateRoute=({children})=>{
    const {isLoggedIn}= useAuth();
    
    return isLoggedIn ? children :<Navigate to="/" />
}