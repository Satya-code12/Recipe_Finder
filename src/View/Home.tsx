import { useState } from "react";
import Modal from "../components/Modal";
// import bgImage from "../images/bg-img.jpg"
import { SendHorizonal } from 'lucide-react';

const Home : React.FC = () => {

  const [showModal, setShowModal] = useState(false)

  return (
    <div className=" w-full h-screen flex flex-col" style={{
      backgroundImage: `url("https://img.freepik.com/premium-photo/grilled-vegetables-skewers-white-plate_1313098-8465.jpg")`,
      backgroundPosition: 'center',
      backgroundRepeat: "no-repeat",
      backgroundSize: 'cover',
    }}>
        {/* Content */}
        {/* flex flex-col justify-center w-[60%] h-[20rem] px-4 text-justify mx-auto gap-8 shadow-2xl rounded-3xl backdrop-filter backdrop-blur-[50px] bg-opacity-10 border */}
        <div className=' container my-auto mx-auto'>
          <div className='text-black w-[30rem] flex flex-col text-shadow gap-y-6 '>
            <h1 className="text-[45px] font-extrabold font-custom " style={{
              letterSpacing: "1px",
            }}>Our Guide... Your Flavourful Creations</h1>
            <p className='text-lg font-medium text-slate-700' style={{
              letterSpacing: "2px",
            }}>Never feel lost in the kitchen again. Our app provides clear, step-by-step instructions and helpful tips to ensure your cooking success. From prepping ingredients to plating your dish, we guide you through every stage of the cooking process. Let's make every dish a masterpiece!</p>
            <button className='bg-white text-black font-medium rounded-lg w-36 flex gap-3 justify-center items-center h-10 shadow-lg hover:bg-[#6495ed]' onClick={()=>setShowModal(true)}>
              Lets Start <SendHorizonal /></button>
          </div>
        </div>
      {showModal && <Modal onClose={() => setShowModal(false)}/>}
    </div>
    
  );
  
}

export default Home;
