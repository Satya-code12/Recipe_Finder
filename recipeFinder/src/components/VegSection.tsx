import { useNavigate } from "react-router-dom"
import "../App.css"
import Cards from "./Cards"
import vegCarddata from "./VegData"

const VegSection: React.FC = () => {

  const navigate = useNavigate()
  const handleNonveg = () =>{
    navigate("/NonVegSection")
  }

  return ( 
    <section className="h-screen w-full p-3 flex gap-10" style={{
      backgroundColor: "#0B0C10"
    }}>
      <nav className=" border border-black flex flex-col w-[10rem] h-full p-2 gap-3 rounded-lg" style={{
      backgroundColor: "#1F2833"
    }}>
        <h1 className="text-center text-3xl font-medium"  style={{
        fontFamily: "myFont",
        color: "#66FCF1"
      }}>Your Pantry!</h1>
      <hr className="bg-[#45A29E] h-[.2rem] "/>
        <div className="flex flex-col gap-8 mt-5 " style={{
          color: "#C5C6C7"
        }}>
          <button className="bg-[#45A29E] rounded-md h-9 font-bold text-base">History</button>
          <button className="bg-[#45A29E] rounded-md h-9 font-bold text-base">Veg Items</button>
          <button className="bg-[#45A29E] rounded-md h-9 font-bold text-base" onClick={handleNonveg}>Non-Veg Items</button>
          <button className="bg-[#45A29E] rounded-md h-9 font-bold text-base">Quick Foods</button>
          <button className="bg-[#45A29E] rounded-md h-9 font-bold text-base">Snacks</button>
        </div>
      </nav>
      <div className="grid grid-cols-7 gap-2">
        {vegCarddata.map((items, index) => (
          <Cards
          key={index}
          imageUrl={items.imageUrl}
          naame={items.naame}
          />
        ))}        
      </div>
    </section>
  )
}

export default VegSection
