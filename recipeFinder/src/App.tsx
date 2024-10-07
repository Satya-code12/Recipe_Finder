import MainPage from "./components/MainPage"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import FoodCatalogue from "./components/FoodCatalogue"

export const App = () =>{
 return(
  <div>
   <Routes>
    <Route path="/" element={ <MainPage />} />
    <Route path="FoodSection" element={ <FoodCatalogue />} />
    {/* <Route path="/" element={ <MainPage />} />
    <Route path="/" element={ <MainPage />} /> */}
   </Routes>
  </div>
 )
}