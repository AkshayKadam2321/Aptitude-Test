
import { useNavigate } from "react-router-dom";

const ErrorComponent=()=>{
     
    const navigate = useNavigate();
    const goToLogin=()=>{
        navigate("/");
    }
    return(
        <div className="ErrorComponent">
            <h1>Apology for 404 error</h1>
            <button style={{
            padding: '5px', // Top/bottom 10px
            margin: '10px', // All sides 15px
            backgroundColor: 'blue',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
    }}
            onClick={goToLogin}>Login</button>         
        </div>
        
    )
}
export default ErrorComponent;