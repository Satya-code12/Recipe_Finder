import { useState } from "react";
import Modal from "./Modal";

function MainPage() {

  const [showModal, setShowModal] = useState(false)

  return (
    <div className=" w-full h-screen flex flex-col border border-black ">
      <div className="">
        {/* Content */}
        <div className='border border-red-700 flex justify-center container mx-auto h-16 p-4'>
          <h1>Our Guide... Your Flavourful Creations</h1>
        </div>
        <div className='border border-blue-800 flex mt-12 h-[20rem] justify-between'>
          <div className='border border-black w-[35rem] flex flex-col justify-center gap-14 p-2'>
            <p className='font-bold font-serif'>Never feel lost in the kitchen again. Our app provides clear, step-by-step instructions and helpful tips to ensure your cooking success. From prepping ingredients to plating your dish, we guide you through every stage of the cooking process. Let's make every dish a masterpiece!</p>
            <button className='border border-black rounded-xl w-[18rem] font-bold font-serif' onClick={()=>setShowModal(true)}>Lets Start</button>
          </div>
        </div>
      </div>
      {showModal && <Modal onClose={() => setShowModal(false)}/>}
    </div>
    
  );
  
}

export default MainPage;
