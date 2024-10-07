import React from 'react'

function FoodCatalogue() {

  const handleVeg = () =>{

  }

  return (
   // main body
    <section className='h-screen w-full'>
     {/* Heading */}
     <div className='border border-black flex justify-center text-2xl'>
      <h1>What's in My Pantry?</h1>
     </div>
     {/* Sidebar */}
     <div className='border border-black flex flex-col h-[93%] w-32 text-center  gap-10'>
      <span className='border border-yellow-500 mt-5 text-xl'>Variety</span>
      <div className='border border-yellow-700 flex flex-col-reverse h-[40rem] justify-evenly'>
       <button className='border border-yellow-700 transform -rotate-90 text-xl tracking-[.35rem]'onClick={handleVeg}>Veg</button><br />
       <button className='border border-yellow-700 transform -rotate-90 text-xl tracking-[.35rem]' >Non-Veg</button>
      </div>
     </div>
    </section>
  )
}

export default FoodCatalogue
