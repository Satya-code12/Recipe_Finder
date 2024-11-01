import { useState } from "react"
import "../App.css"
import Navbar from "./Navbar"
import Pantryitems from "./Pantryitems"

const Pantry : React.FC = () => {

const [showItems, setShowItems] = useState(false);

const handleStock = () =>{
  setShowItems(true);
}

  return ( 
    <section className="h-screen w-full p-3 flex gap-x-[15%]" style={{
      backgroundColor: "#F0FFF0"
    }}>
      <Navbar onClick = {handleStock}/>
      
      {showItems && <Pantryitems />}
    </section>
  )
}

export default Pantry
