import Home from "./View/Home"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import Pantry from "./components/Pantry"


export const App = () =>{
 return(
  <div>
   <Routes>
    <Route path="/" element={ <Home />} />
    <Route path="FoodSection" element={ <Pantry />} />
   </Routes>
  </div>
 )
}