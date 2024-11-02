import { useState } from "react"
import ItemsList from "./ItemsList"

const StockNavbar : React.FC = () => {

const [showItems, setShowItems] = useState(false)

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex gap-x-[30rem] p-2 shadow-lg bg-white rounded-xl">
          <h1 className="font-bold text-3xl" style={{
            textShadow: "1px 1px 2px #000000",
            letterSpacing: "1.5px"
      }}>Pantry</h1>
          <button className="w-max h-max p-2 rounded-lg font-medium text-white" style={{
            backgroundImage: "linear-gradient(to bottom right, #874CCC, #0E21A0",
          }} onClick={() => setShowItems(true)}>Add Items</button>
        </div>

        {showItems && <ItemsList />}
    </div>
  )
}

export default StockNavbar
