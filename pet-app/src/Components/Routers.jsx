import { Routes,Route } from "react-router-dom";

import { Display } from "./Display";
import { CreateTop } from "./Create_Top";

export const Routers = ()=>{
    return (
        <div>
            <Routes>
                <Route path="/" element={<Display></Display>}></Route>
                <Route path="/create" element={<CreateTop></CreateTop>}></Route>
            </Routes>
        </div>
    )
}