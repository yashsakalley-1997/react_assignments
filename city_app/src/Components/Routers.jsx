import { Routes,Route } from "react-router-dom";

import { AddCountry } from "./AddCountry";
import { AddCity } from "./AddCity";
import { Display } from "./Display";
export const Routers = ()=>{
    return (
        <div>
            <Routes>
                <Route path="/add-country" element={<AddCountry></AddCountry>}></Route>
                <Route path="/add-city" element={<AddCity></AddCity>}></Route>
                <Route path="/" element={<Display></Display>}></Route>
            </Routes>
        </div>
    )
}