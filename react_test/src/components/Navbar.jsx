import { useNavigate } from "react-router-dom";

export const Navbar = ()=>{
    const Navigate = useNavigate();

    return (
        <div>
            <div className="navbar_elements">
                <span onClick={()=>{
                    Navigate("/login")
                }}>Login</span>
                <span onClick={()=>{
                    Navigate("/register")
                }}>Register</span>
                <span onClick={()=>{
                    Navigate("/")
                }}>Home</span>
            </div>
        </div>
    )
}