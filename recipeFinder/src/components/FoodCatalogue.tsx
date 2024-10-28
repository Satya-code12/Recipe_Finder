import { useNavigate } from "react-router-dom"
import "../App.css"

const FoodCatalogue = () => {

const navigate = useNavigate()
const handleVeg =()=>{
  console.log("clicked");
  navigate("/VegSection")
}

const handleNonveg = () =>{
  console.log("button clicked");
  navigate("/NonVegSection")
}

  return ( 
    <section className="h-screen w-full p-3 flex gap-x-[30%]" style={{
      backgroundColor: "#F0FFF0"
    }}>
      <nav className="flex flex-col w-[10rem] h-full p-2 gap-3 rounded-xl shadow-xl" style={{
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
        <div className="flex flex-col gap-8 mt-5 ">
          <button className="rounded-md h-9 font-bold text-base text-white" style={{
            backgroundImage: "linear-gradient(to bottom right, #874CCC, #0E21A0",
          }}>History</button>
          <button className="rounded-md h-9 font-bold text-base text-white" onClick={handleVeg} style={{
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
        </div>
      </nav>
      <div className="flex items-center">
        <h1 className="font-semibold text-4xl">[Please choose your Items...]</h1>
      </div>
    </section>
  )
}

export default FoodCatalogue
