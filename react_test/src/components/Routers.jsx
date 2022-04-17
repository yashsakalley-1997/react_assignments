import { Routes,Route } from "react-router-dom";
import { Register } from "./Register";
import { Login } from "./Login";
import { ShowFlats } from "./ShowFlats";
import { Residents } from "./Residents";
export const Routers = ()=>{
    return (
        <div>
            <Routes>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/" element={<ShowFlats></ShowFlats>}></Route>
                <Route path="/residents/:id" element={<Residents></Residents>}></Route>
            </Routes>
        </div>
    )
}