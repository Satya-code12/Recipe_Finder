import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../App.css"
import NonCard from "./NonCard"
import nonVegData from "./NonvegData"
import { ShoppingCart } from "lucide-react"

const NonVegSec: React.FC = () => {
  const [quantities, setQuantities] = useState(Array(nonVegData.length).fill(0));

  const navigate = useNavigate();

  const handleVeg = () => {
    navigate("/VegSection");
  };

  const handleIncrement = (index: number) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index]++;
      return newQuantities;
    });
  };

  const handleDecrement = (index: number) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      if (newQuantities[index] > 0) {
        newQuantities[index]--;
      }
      return newQuantities;
    });
  };

  const totalItems = quantities.reduce((total, quantity) => total + quantity, 0);

  return (
    <section className="h-screen w-full p-3 flex gap-14" style={{ backgroundColor: "#0B0C10" }}>
      <nav className="border border-black flex flex-col w-[10rem] h-full p-2 gap-3 rounded-lg" style={{ backgroundColor: "#1F2833" }}>
        <h1 className="text-center text-3xl font-medium" style={{ fontFamily: "myFont", color: "#66FCF1" }}>Your Pantry!</h1>
        <hr className="bg-[#45A29E] h-[.2rem]" />
        <div className="flex flex-col gap-8 mt-5" style={{ color: "#C5C6C7" }}>
          <button className="bg-[#45A29E] rounded-md h-9 font-bold text-base">History</button>
          <button className="bg-[#45A29E] rounded-md h-9 font-bold text-base" onClick={handleVeg}>Veg Items</button>
          <button className="bg-[#45A29E] rounded-md h-9 font-bold text-base">Non-Veg Items</button>
          <button className="bg-[#45A29E] rounded-md h-9 font-bold text-base">Quick Foods</button>
          <button className="bg-[#45A29E] rounded-md h-9 font-bold text-base">Snacks</button>
          <button className="bg-[#45A29E] rounded-md h-9 flex justify-center items-center">
            <ShoppingCart/> {totalItems}
          </button>
        </div>
      </nav>
      <div className="flex flex-col gap-5">
        {nonVegData.map((item, index) => (
          <NonCard
            key={index}
            imgUrl={item.imgUrl}
            name={item.name}
            quantity={quantities[index]}
            onIncrement={() => handleIncrement(index)}
            onDecrement={() => handleDecrement(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default NonVegSec;
