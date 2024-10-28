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
        <div className="flex flex-col gap-8 mt-5 ">
          <button className="rounded-md h-9 font-bold text-base text-white" style={{
            backgroundImage: "linear-gradient(to bottom right, #874CCC, #0E21A0",
          }}>History</button>
          <button className="rounded-md h-9 font-bold text-base text-white" onClick={handleVeg} style={{
            backgroundImage: "linear-gradient(to bottom right, #874CCC, #0E21A0",
          }}>Veg Items</button>
          <button className="rounded-md h-9 font-bold text-base text-white" style={{
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
          }}><ShoppingCart/> {totalItems}</button>
        </div>
      </nav>
      <div className="grid grid-cols-4 gap-x-8">
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
