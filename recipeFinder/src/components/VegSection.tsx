import { useNavigate } from "react-router-dom"
import "../App.css"
import Cards from "./Cards"
import vegCarddata from "./VegData"
import { ShoppingCart } from "lucide-react"

const VegSection: React.FC = () => {

  const navigate = useNavigate()
  const handleNonveg = () =>{
    navigate("/NonVegSection")
  }

  return ( 
    <section className="h-screen w-full p-3 flex gap-14" style={{
      backgroundColor: "#F0FFF0"
    }}>
      <nav className="flex flex-col w-[10rem] h-full p-2 rounded-xl shadow-xl" style={{
      backgroundColor: "white"
    }}>
        <h1 className="text-center text-3xl font-bold"  style={{
        color: "#000",
        textShadow: "1px 1px 2px #000000",
        letterSpacing: "1.5px"
      }}>Your Pantry!</h1>
      <hr className="h-[.2rem]" style={{
            backgroundImage: "linear-gradient(to bottom right, purple, blue",
          }}/>
        <div className="flex flex-col gap-8 mt-5 " style={{
          color: "#C5C6C7"
        }}>
          <button className="rounded-md h-9 font-bold text-base text-white" style={{
            backgroundImage: "linear-gradient(to bottom right, #874CCC, #0E21A0",
          }}>History</button>
          <button className="rounded-md h-9 font-bold text-base text-white" style={{
            backgroundImage: "linear-gradient(to bottom right, #874CCC, #0E21A0",
          }}>Veg Items</button>
          <button className="rounded-md h-9 font-bold text-base text-white" onClick={handleNonveg} style={{
            backgroundImage: "linear-gradient(to bottom right, #874CCC, #0E21A0",
          }}>Non-Veg Items</button>
          <button className="rounded-md h-9 font-bold text-base text-white" style={{
            backgroundImage: "linear-gradient(to bottom right, #874CCC, #0E21A0",
          }}>Quick Foods</button>
          <button className="rounded-md h-9 font-bold text-base text-white" style={{
            backgroundImage: "linear-gradient(to bottom right, #874CCC, #0E21A0",
          }}>Snacks</button>
          <button className="rounded-md h-9 font-bold text-base flex justify-center items-center text-white" style={{
            backgroundImage: "linear-gradient(to bottom right, #874CCC, #0E21A0",
          }}><ShoppingCart /> Cart </button>
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
