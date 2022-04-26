import { Routes,Route } from "react-router-dom";

import { Display } from "./Display";
import { CreateTop } from "./Create_Top";
import { EntityDetails } from "./EntityDetails";
import { Register } from "./Register";
import { Login } from "./Login";
import { PetDetails } from "./PetDetails";
import { BookHouse } from "./BookHouse";

export const Routers = ()=>{
    return (
        <div>
            <Routes>
                <Route path="/" element={<Display></Display>}></Route>
                <Route path="/create" element={<CreateTop></CreateTop>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/pet" element={<PetDetails></PetDetails>}></Route>
                <Route path="/details/:id" element={<EntityDetails></EntityDetails>}></Route>
                <Route path="/book/:data" element={<BookHouse></BookHouse>}></Route>
            </Routes>
        </div>
    )
}