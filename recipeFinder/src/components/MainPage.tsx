import { useState } from "react";
import Modal from "./Modal";
import bgImage from "../images/bg-img.jpg"
import { SendHorizonal } from 'lucide-react';

const MainPage : React.FC = () => {

  const [showModal, setShowModal] = useState(false)

  return (
    <div className=" w-full h-screen flex flex-col " style={{
      backgroundImage: `url(${bgImage})`,
      backgroundPosition: 'center',
      backgroundRepeat: "no-repeat",
      backgroundSize: 'cover',
    }}>
        {/* Content */}
        <div className='my-auto'>
          <div className='text-white flex flex-col justify-center w-[60%] h-[20rem] px-4 text-justify mx-auto gap-8 backdrop-filter backdrop-blur-[50px] bg-opacity-10 rounded-3xl'>
            <h1 className="text-3xl font-semibold " style={{
              letterSpacing: "1px",
            }}>Our Guide... Your Flavourful Creations</h1>
            <p className='text-base text-slate-200' style={{
              letterSpacing: "2px",
            }}>Never feel lost in the kitchen again. Our app provides clear, step-by-step instructions and helpful tips to ensure your cooking success. From prepping ingredients to plating your dish, we guide you through every stage of the cooking process. Let's make every dish a masterpiece!</p>
            <button className='border border-gray-500 bg-slate-200 text-black font-medium rounded-lg w-36 flex gap-3 px-4' onClick={()=>setShowModal(true)}>
              Lets Start <SendHorizonal /></button>
          </div>
        </div>
      {showModal && <Modal onClose={() => setShowModal(false)}/>}
    </div>
    
  );
  
}

export default MainPage;
