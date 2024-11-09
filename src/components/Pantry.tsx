import { useState } from "react"
import "../App.css"
import Navbar from "./Navbar"
import StockNavbar from "./StockNavbar"


const Pantry : React.FC = () => {

const [showItems, setShowItems] = useState(false);

const handleStock = () =>{
  setShowItems(true);
}


  return ( 
    <section className="h-screen w-full p-4 flex gap-x-[13%]" style={{
      backgroundColor: "#F4F4F4"
    }}>
      <Navbar onShow = {handleStock}/>
      
      {showItems && <StockNavbar />}
    </section>
  )
}

export default Pantry
