import { Routes,Route } from "react-router-dom";
import { AddCountries } from "./AddCountries";
import { AddCities } from "./AddCities";
import { ShowCities } from "./ShowCities";

export const Routers = ()=>{
    return (
        <div>
            <Routes>
                <Route path="/add-country" element={<AddCountries></AddCountries>}></Route>
                <Route path="/add-city" element={<AddCities></AddCities>}></Route>
                <Route path="/" element={<ShowCities></ShowCities>}></Route>
            </Routes>
        </div>
    )
}