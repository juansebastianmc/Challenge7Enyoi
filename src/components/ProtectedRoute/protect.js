import { Navigate } from "react-router-dom"

const Protect = ({isallowed,children})=>{
    if(!isallowed){
        return <Navigate to='/login' />
    }else{
        return children

    }
}

export default Protect;